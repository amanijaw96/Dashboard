// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Users"];
// const settings = ["Logout"];

// function TopMenu() {
// 	const [anchorElNav, setAnchorElNav] = React.useState(null);
// 	const [anchorElUser, setAnchorElUser] = React.useState(null);

// 	const handleOpenNavMenu = (event) => {
// 		setAnchorElNav(event.currentTarget);
// 	};
// 	const handleOpenUserMenu = (event) => {
// 		setAnchorElUser(event.currentTarget);
// 	};

// 	const handleCloseNavMenu = () => {
// 		setAnchorElNav(null);
// 	};

// 	const handleCloseUserMenu = () => {
// 		setAnchorElUser(null);
// 	};

// 	return (
// 		<AppBar position="static">
// 			<Container maxWidth="xl">
// 				<Toolbar disableGutters>
// 					<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
// 					<Typography
// 						variant="h6"
// 						noWrap
// 						component="a"
// 						href="#app-bar-with-responsive-menu"
// 						sx={{
// 							mr: 2,
// 							display: { xs: "none", md: "flex" },
// 							fontFamily: "monospace",
// 							fontWeight: 700,
// 							letterSpacing: ".3rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					>
// 						LOGO
// 					</Typography>

// 					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// 						<IconButton
// 							size="large"
// 							aria-label="account of current user"
// 							aria-controls="menu-appbar"
// 							aria-haspopup="true"
// 							onClick={handleOpenNavMenu}
// 							color="inherit"
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Menu
// 							id="menu-appbar"
// 							anchorEl={anchorElNav}
// 							anchorOrigin={{
// 								vertical: "bottom",
// 								horizontal: "left",
// 							}}
// 							keepMounted
// 							transformOrigin={{
// 								vertical: "top",
// 								horizontal: "left",
// 							}}
// 							open={Boolean(anchorElNav)}
// 							onClose={handleCloseNavMenu}
// 							sx={{
// 								display: { xs: "block", md: "none" },
// 							}}
// 						>
// 							{pages.map((page) => (
// 								<MenuItem key={page} onClick={handleCloseNavMenu}>
// 									<Typography textAlign="center">{page}</Typography>
// 								</MenuItem>
// 							))}
// 						</Menu>
// 					</Box>
// 					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
// 					<Typography
// 						variant="h5"
// 						noWrap
// 						component="a"
// 						href="#app-bar-with-responsive-menu"
// 						sx={{
// 							mr: 2,
// 							display: { xs: "flex", md: "none" },
// 							flexGrow: 1,
// 							fontFamily: "monospace",
// 							fontWeight: 700,
// 							letterSpacing: ".3rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					>
// 						LOGO
// 					</Typography>
// 					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// 						{pages.map((page) => (
// 							<Button
// 								key={page}
// 								onClick={handleCloseNavMenu}
// 								sx={{ my: 2, color: "white", display: "block" }}
// 							>
// 								{page}
// 							</Button>
// 						))}
// 					</Box>

// 					<Box sx={{ flexGrow: 0 }}>
// 						<Tooltip title="Open settings">
// 							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// 								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
// 							</IconButton>
// 						</Tooltip>
// 						<Menu
// 							sx={{ mt: "45px" }}
// 							id="menu-appbar"
// 							anchorEl={anchorElUser}
// 							anchorOrigin={{
// 								vertical: "top",
// 								horizontal: "right",
// 							}}
// 							keepMounted
// 							transformOrigin={{
// 								vertical: "top",
// 								horizontal: "right",
// 							}}
// 							open={Boolean(anchorElUser)}
// 							onClose={handleCloseUserMenu}
// 						>
// 							{settings.map((setting) => (
// 								<MenuItem key={setting} onClick={handleCloseUserMenu}>
// 									<Typography textAlign="center">{setting}</Typography>
// 								</MenuItem>
// 							))}
// 						</Menu>
// 					</Box>
// 				</Toolbar>
// 			</Container>
// 		</AppBar>
// 	);
// }
// export default TopMenu;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppDrawer from "./AppDrawer";
import { drawerWidth } from "../constants";
import { FormattedMessage } from "react-intl";
import TopMenu from "./TopMenu";

function AppLayout(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	// Remove this const when copying and pasting into your project.
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<TopMenu handleDrawerToggle={handleDrawerToggle}></TopMenu>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					<AppDrawer></AppDrawer>
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					<AppDrawer></AppDrawer>
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}

AppLayout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * Remove this when copying and pasting into your project.
	 */
	window: PropTypes.func,
};

export default AppLayout;
