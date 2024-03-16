import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../../utils/storageHandler";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const setComponent = (props) => {
		const currentUser = getUser();
		if (currentUser) {
			return <Component {...props} />;
		}
		return (
			<Redirect
				to={{
					pathname: "/user/login",
					state: { from: props.location },
				}}
			/>
		);

		return <Component {...props} />;
	};

	return <Route {...rest} render={setComponent} />;
};
export { ProtectedRoute };
