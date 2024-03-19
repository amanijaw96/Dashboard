import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../components/Common/Loader";
const LoginPage = React.lazy(() =>
	import(/* webpackChunkName: "user-login" */ "../pages/LoginPage.js")
);

const User = ({ match }) => {
	return (
		<UserLayout>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
					<Route
						path={`${match.url}/login`}
						render={(props) => <LoginPage {...props} />}
					/>
					<Redirect to="/error" />
				</Switch>
			</Suspense>
		</UserLayout>
	);
};

export default User;
