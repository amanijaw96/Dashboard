import * as Yup from "yup";

export const yupEmail = Yup.string("Enter your email")
	.email("Enter a valid email")
	.required("Email is required");

export const yupPassword = Yup.string("Enter your password")
	.min(8, "Password should be of minimum 8 characters length")
	.required("Password is required");

export const yupUserName = Yup.string("Enter your Username").required(
	"Username is required"
);

export const yupFirstName = Yup.string("Enter First Name").required(
	"This field is required"
);

export const yupLastName = Yup.string("Enter Last Name").required(
	"This field is required"
);

export const yupAge = Yup.number("Enter Age Value").required(
	"This field is required"
);

export const Schema = (object) => {
	return Yup.object(object);
};
