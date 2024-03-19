import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CopyRight from "../components/Common/CopyRight";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import { SET_USER } from "../constants";
import { yupUserName, yupPassword, Schema } from "../utils/validations";
import { useDispatch } from "react-redux";
import { Login } from "../utils/api/services";
import { setTokens } from "../utils/storageHandler";
const LoginPage = () => {
	const dispatch = useDispatch();

	const validationSchema = Schema({
		username: yupUserName,
		password: yupPassword,
	});

	const handleLogin = (values) => {
		Login(values).then((rsp) => {
			dispatch({
				type: SET_USER,
				payload: {
					...rsp?.data,
				},
			});
			setTokens({ access_token: rsp?.data?.token });
			window.location.href = "/app";
		});
	};

	const formik = useFormik({
		initialValues: {
			username: "atuny0",
			password: "9uQFF1Lh",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleLogin(values);
		},
	});

	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				<FormattedMessage id={"signin"}></FormattedMessage>
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="User Name"
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					autoFocus
				/>
				<FormControlLabel
					control={
						<Checkbox value="remember" color="primary" name="rememberMe" />
					}
					label="Remember me"
					onChange={formik.handleChange}
					name="rememberMe"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					<FormattedMessage id={"signin"}></FormattedMessage>
				</Button>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					<Grid item md={6}>
						<Link href="#" variant="body2">
							<FormattedMessage id={"forgotpassword"}></FormattedMessage>
						</Link>
					</Grid>
					<Grid
						item
						md={6}
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							flexDirection: "row",
						}}
					>
						<Link href="#" variant="body2">
							<FormattedMessage id={"dnthaveaccount"}></FormattedMessage>
						</Link>
					</Grid>
				</Box>
				<CopyRight sx={{ mt: 5 }} />
			</form>
		</>
	);
};

export default LoginPage;
