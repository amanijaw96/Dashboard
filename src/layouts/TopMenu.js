import { drawerWidth } from "../constants";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { FormattedMessage } from "react-intl";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { adminRoot } from "../constants";
import { cursorPointer } from "../assets/ConstantStyles";
import { deleteUser, deleteTokens } from "../utils/storageHandler";

const TopMenu = ({ handleDrawerToggle }) => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const Logout = () => {
		deleteUser();
		deleteTokens();
		window.location.href = "/user/login";
	};
	const settings = [{ Text: "Logout", handleClick: Logout }];
	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box
					style={cursorPointer}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						onClick={() => (window.location.href = adminRoot)}
						variant="h6"
						noWrap
						component="div"
					>
						<FormattedMessage id={"apptitle"}></FormattedMessage>
					</Typography>
				</Box>
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: "45px" }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={setting?.handleClick}>
								<Typography textAlign="center">
									<FormattedMessage id={setting?.Text} />
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
export default TopMenu;
