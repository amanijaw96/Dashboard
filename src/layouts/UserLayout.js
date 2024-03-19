import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const UserLayout = ({ children }) => {
	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7}>
				<LazyLoadImage
					alt={"d"}
					src={"https://source.unsplash.com/random?wallpapers"}
					width={"100%"}
					height={"100%"}
					effect="blur"
					objectFit={"cover"}
				/>
			</Grid>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					{children}
				</Box>
			</Grid>
		</Grid>
	);
};

export default UserLayout;
