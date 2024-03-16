import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Paper from "@mui/material/Paper";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);
const DougnutChart = ({ DataName, title, data }) => {
	const optionsDough = {
		chart: {
			type: "pie",
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0,
			},
		},
		title: {
			text: title,
			align: "left",
		},
		plotOptions: {
			pie: {
				innerSize: 100,
				depth: 45,
			},
		},
		series: [
			{
				name: DataName,
				data: data,
			},
		],
	};
	return (
		<Paper
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
				height: 350,
			}}
		>
			<HighchartsReact highcharts={Highcharts} options={optionsDough} />
		</Paper>
	);
};
export default DougnutChart;
