import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const DashboardPage = React.lazy(() =>
	import(/* webpackChunkName: "dashboard-page" */ "../pages/DashboardPage.js")
);

const User = ({ match }) => {
	return (
		<AppLayout>
			<Suspense fallback={<div className="loading" />}>
				<Switch>
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
