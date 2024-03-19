import getGuestInstance from "./axios/GuestInstance";
import getAuthInstance from "./axios/AuthInstance";

export const GetUsers = () => {
	return getGuestInstance().get("/users");
};

export const AddUser = (body) => {
	return getGuestInstance().post("/users/add", { ...body });
};

export const Login = (body) => {
	return getGuestInstance().post("/auth/login", { ...body });
};
