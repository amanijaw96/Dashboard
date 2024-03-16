import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BarChartColorPallete } from "../../constants";
import Paper from "@mui/material/Paper";
const BarChart = ({ text, subtitle, yAxisTitle, tooltip, DataName, data }) => {
	const options = {
		chart: {
			type: "column",
		},
		title: {
			text: text,
		},
		subtitle: {
			text: subtitle,
		},
		xAxis: {
			type: "category",
			labels: {
				autoRotation: [-45, -90],
				style: {
					fontSize: "13px",
					fontFamily: "Verdana, sans-serif",
				},
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: yAxisTitle,
			},
		},
		legend: {
			enabled: false,
		},
		tooltip: {
			pointFormat: tooltip,
		},
		series: [
			{
				name: DataName,
				colors: BarChartColorPallete,
				colorByPoint: true,
				groupPadding: 0,
				data: data,
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: "#FFFFFF",
					inside: true,
					verticalAlign: "top",
					format: "{point.y:.1f}", // one decimal
					y: 10, // 10 pixels down from the top
					style: {
						fontSize: "13px",
						fontFamily: "Verdana, sans-serif",
					},
				},
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
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Paper>
	);
};
export default BarChart;
