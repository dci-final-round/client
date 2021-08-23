import React from "react";
import { RouteComponentProps, Route } from "react-router-dom";

interface Props {
	Component: React.FC<RouteComponentProps>;
	path: string;
	exact?: boolean;
	isPrivate: boolean;
}

// Todo implement route guard with session cookies or tokens

const AuthRoute = ({
	Component,
	path,
	exact = false,
	isPrivate,
	...rest
}: Props): JSX.Element => {
	return (
		<>{<Route path={path} render={(props) => <Component {...props} />} />}</>
	);
};

export default AuthRoute;
