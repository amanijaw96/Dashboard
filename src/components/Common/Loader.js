import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = (props) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				height: "calc(100vh - 114px)",
				width: "100%",
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loader;
