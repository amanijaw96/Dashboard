import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ViewListIcon from "@mui/icons-material/ViewList";

const AppDrawer = () => {
	const MenuItems = [
		{
			id: 1,
			label: "Users",
			Icon: <PeopleAltIcon />,
		},
	];
	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{MenuItems.map((item, index) => {
					console.log(item);
					return (
						<ListItem key={item?.id} disablePadding>
							<ListItemButton>
								<ListItemIcon>{item?.Icon}</ListItemIcon>
								<ListItemText primary={item?.label} />
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
};

export default AppDrawer;
