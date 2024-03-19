import React, { Suspense, createContext, useContext } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./components/Auth/PrivateRoute.js";
import InversedWithAuth from "./components/Auth/InversedWithAuth";
import { adminRoot } from "./constants";
import AppLocale from "./lang";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import Snackbar from "@mui/material/Snackbar";

const ViewApp = React.lazy(() => import("./views/Appwrapper.js"));
const ViewUser = React.lazy(() => import("./views/User.js"));
export const AppContext = createContext();
function App() {
	const [open, setOpen] = React.useState(false);
	const [snackBarMessage, setMessage] = React.useState(false);
	const locale = "en";
	const currentAppLocale = AppLocale[locale];
	const defaultTheme = createTheme();

	const SetAlert = (message) => {
		setOpen(true);
		setMessage(message);
	};
	return (
		<Provider store={configureStore()}>
			<ThemeProvider theme={defaultTheme}>
				<AppContext.Provider value={{ SetAlert }}>
					<IntlProvider
						locale={currentAppLocale.locale}
						messages={currentAppLocale.messages}
					>
						<Suspense fallback={<div className="loading" />}>
							<Router>
								<Switch>
									<ProtectedRoute path={adminRoot} component={ViewApp} />
									<InversedWithAuth
										path="/user"
										render={(props) => <ViewUser {...props} />}
									/>
									<Redirect from="/" to={adminRoot} />
								</Switch>
							</Router>
						</Suspense>
						<Snackbar
							open={open}
							autoHideDuration={5000}
							onClose={() => setOpen(false)}
							message={snackBarMessage}
						/>
					</IntlProvider>
				</AppContext.Provider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;

export const useAppContext = () => useContext(AppContext);
