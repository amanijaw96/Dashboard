import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../components/Common/Loader";

const DashboardPage = React.lazy(() =>
	import(/* webpackChunkName: "dashboard-page" */ "../pages/DashboardPage.js")
);

const UsersPage = React.lazy(() =>
	import(/* webpackChunkName: "dashboard-page" */ "../pages/UsersPage.js")
);

const User = ({ match }) => {
	return (
		<AppLayout>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Redirect exact from={`/`} to={`/app`} />
					<Route
						path={`${match.url}/users`}
						render={(props) => <UsersPage {...props} />}
					/>
					<Route
						path={`${match.url}`}
						render={(props) => <DashboardPage {...props} />}
					/>
					<Redirect to="/error" />
				</Switch>
			</Suspense>
		</AppLayout>
	);
};

export default User;
