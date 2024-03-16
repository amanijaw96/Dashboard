import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Paper from "@mui/material/Paper";

const PieChart = ({ title, subtitle, DataName, data }) => {
	const options = {
		chart: {
			type: "pie",
		},
		title: {
			text: title,
		},
		tooltip: {
			valueSuffix: "%",
		},
		subtitle: {
			text: subtitle,
		},
		plotOptions: {
			series: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: [
					{
						enabled: true,
						distance: 20,
					},
					{
						enabled: true,
						distance: -40,
						format: "{point.percentage:.1f}%",
						style: {
							fontSize: "1.2em",
							textOutline: "none",
							opacity: 0.7,
						},
						filter: {
							operator: ">",
							property: "percentage",
							value: 10,
						},
					},
				],
			},
		},
		series: [
			{
				name: DataName,
				colorByPoint: true,
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
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Paper>
	);
};
export default PieChart;
