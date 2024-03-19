import { Translate } from "../utils/utils";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GetUsers, AddUser } from "../utils/api/services";
import { columns } from "../constants";
import Loader from "../components/Common/Loader";
import Box from "@mui/material/Box";
import UserFormModal from "../components/Users/UserFormModal";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppContext } from "../App";
import { FormattedMessage } from "react-intl";
import DeleteWarninModal from "../components/Common/DeleteWarninModal";

const UsersPage = () => {
	const { SetAlert } = useAppContext();
	const [users, setUsers] = useState([]);
	const [loading, setloading] = useState(true);
	const [ModalOpen, setModalOpen] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [page, setPage] = useState(1);
	const [rowSelectionModel, setRowSelectionModel] = useState([]);
	const Updated = Translate("user.updated");
	const Added = Translate("user.added");
	const Deleted = Translate("deleteSuccess");

	useEffect(() => {
		GetUsers()
			.then((rsp) => {
				setUsers(rsp?.data?.users);
				setloading(false);
			})
			.catch((err) => {
				setloading(false);
			});
	}, []);

	const handleUserFormSubmit = (user) => {
		setloading(true);
		if (rowSelectionModel.length === 1) {
			setloading(false);
			setModalOpen(false);
			const index = users.findIndex((item) => item.id === rowSelectionModel[0]);
			const updatedItems = [...users];
			updatedItems[index] = { id: rowSelectionModel[0], ...user };
			setUsers(updatedItems);
			setRowSelectionModel([]);
			SetAlert(Updated);
		} else {
			AddUser(user)
				.then((rsp) => {
					setloading(false);
					setModalOpen(false);
					setUsers([{ id: users[users.length - 1].id + 1, ...user }, ...users]);
					SetAlert(Added);
				})
				.catch((err) => {
					setloading(false);
				});
		}
	};

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	const handleDeleteUser = () => {
		setloading(false);
		const updatedItems = users.filter(
			(item) => !rowSelectionModel.includes(item.id)
		);
		setUsers(updatedItems);
		setDeleteModal(false);
		SetAlert(Deleted);
	};

	return loading ? (
		<Loader />
	) : (
		<>
			<div style={{ height: "90%", width: "100%" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: "row",
						width: "100%",
						flexWrap: "nowrap",
					}}
				>
					<Typography variant="h3" color="primary.main" sx={{ mt: 3, mb: 3 }}>
						<FormattedMessage id={"Users"}></FormattedMessage>
					</Typography>
					<Box>
						{rowSelectionModel.length > 0 && (
							<IconButton
								color="error"
								sx={{ mr: 2 }}
								aria-label="delete"
								size="medium"
								onClick={() => setDeleteModal(true)}
							>
								<DeleteIcon fontSize="inherit" />
							</IconButton>
						)}
						{rowSelectionModel.length === 1 && (
							<IconButton
								sx={{ mr: 2 }}
								aria-label="edit"
								size="medium"
								onClick={() => setModalOpen(true)}
							>
								<EditIcon fontSize="inherit" />
							</IconButton>
						)}
						<Button onClick={() => setModalOpen(true)} variant="contained">
							<FormattedMessage id={"addNewUser"}></FormattedMessage>
						</Button>
					</Box>
				</Box>
				<DataGrid
					rows={users}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 10 },
						},
					}}
					page={page}
					onPageChange={handlePageChange}
					checkboxSelection
					onRowSelectionModelChange={(newRowSelectionModel) => {
						setRowSelectionModel(newRowSelectionModel);
					}}
					rowSelectionModel={rowSelectionModel}
				/>
			</div>
			<UserFormModal
				open={ModalOpen}
				toggle={() => {
					setModalOpen((curr) => !curr);
				}}
				onClose={() => {
					setModalOpen(false);
					setRowSelectionModel([]);
				}}
				handleSubmit={handleUserFormSubmit}
				UserData={
					rowSelectionModel.length === 1 &&
					users.filter((elem) => elem.id == rowSelectionModel[0])[0]
				}
			></UserFormModal>
			<DeleteWarninModal
				open={deleteModal}
				toggle={() => setDeleteModal((curr) => !curr)}
				Message={
					rowSelectionModel.length > 1
						? "deleteUserMessagePlural"
						: "deleteUserMessage"
				}
				title={"deleteUser"}
				handleSubmit={handleDeleteUser}
			></DeleteWarninModal>
		</>
	);
};

export default UsersPage;
