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
			url: "/app/users",
		},
	];
	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{MenuItems.map((item, index) => {
					return (
						<ListItem
							key={item?.id}
							disablePadding
							component={"a"}
							href={item?.url}
							button
						>
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
