import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import {
	Schema,
	yupFirstName,
	yupLastName,
	yupAge,
} from "../../utils/validations";

const UserFormModal = ({ open, toggle, onClose, handleSubmit, UserData }) => {
	const validationSchema = Schema({
		firstName: yupFirstName,
		lastName: yupLastName,
		age: yupAge,
	});

	const formik = useFormik({
		initialValues: {
			firstName: UserData?.firstName,
			lastName: UserData?.lastName,
			age: UserData?.age,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	React.useEffect(() => {
		formik.setFieldValue("firstName", UserData?.firstName);
		formik.setFieldValue("lastName", UserData?.lastName);
		formik.setFieldValue("age", UserData?.age);
	}, [UserData]);

	return (
		<React.Fragment>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>
					{UserData ? (
						<FormattedMessage id={"user.edit"}></FormattedMessage>
					) : (
						<FormattedMessage id={"user.add"}></FormattedMessage>
					)}
				</DialogTitle>
				<DialogContent>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							fullWidth
							margin="normal"
							required
							id="firstName"
							label="First Name"
							name="firstName"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.firstName && Boolean(formik.errors.firstName)
							}
							helperText={formik.touched.firstName && formik.errors.firstName}
							autoFocus
						/>
						<TextField
							fullWidth
							margin="normal"
							required
							id="lastName"
							label="Last Name"
							name="lastName"
							defaultValue={UserData?.lastName}
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
							autoFocus
						/>
						<TextField
							fullWidth
							margin="normal"
							required
							id="age"
							label="Age"
							name="age"
							type="number"
							defaultValue={UserData?.age}
							value={formik.values.age}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.age && Boolean(formik.errors.age)}
							helperText={formik.touched.age && formik.errors.age}
							autoFocus
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							{UserData ? (
								<FormattedMessage id={"user.edit"}></FormattedMessage>
							) : (
								<FormattedMessage id={"user.add"}></FormattedMessage>
							)}
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default UserFormModal;
