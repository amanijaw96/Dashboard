import React, { Suspense } from "react";
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

const ViewApp = React.lazy(() => import("./views/Appwrapper.js"));
const ViewUser = React.lazy(() => import("./views/User.js"));
function App() {
	const locale = "en";
	const currentAppLocale = AppLocale[locale];
	const defaultTheme = createTheme();

	return (
		<Provider store={configureStore()}>
			<ThemeProvider theme={defaultTheme}>
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
								<Redirect to="/error" />
							</Switch>
						</Router>
					</Suspense>
				</IntlProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
