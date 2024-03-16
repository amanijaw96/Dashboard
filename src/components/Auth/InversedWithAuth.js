import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../../utils/storageHandler";

// If user is logged in, this HOC prevents access
// to register and login pages and redirects to homepage instead
const InversedWithAuth = (props) => {
	const { component: Component, render, ...restProps } = props;
	const user = getUser();

	return (
		<>
			{!user && (
				<Route
					render={(props) =>
						Component ? <Component {...props} {...restProps} /> : render(props)
					}
					{...restProps}
				/>
			)}
			{user && <Redirect to="/app" />}
		</>
	);
};

export default InversedWithAuth;
