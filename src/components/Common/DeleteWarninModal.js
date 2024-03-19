import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormattedMessage } from "react-intl";

export default function DeleteWarninModal({
	open,
	toggle,
	title,
	Message,
	handleSubmit,
}) {
	return (
		<Dialog
			open={open}
			onClose={toggle}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				<FormattedMessage id={title}></FormattedMessage>
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<FormattedMessage id={Message}></FormattedMessage>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={toggle}>
					<FormattedMessage id={"Cancel"}></FormattedMessage>
				</Button>
				<Button onClick={handleSubmit} autoFocus>
					<FormattedMessage id={"Delete"}></FormattedMessage>
				</Button>
			</DialogActions>
		</Dialog>
	);
}
