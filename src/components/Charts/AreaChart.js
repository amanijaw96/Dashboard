import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Paper from "@mui/material/Paper";
const AreaChart = ({
	DataSeries,
	title,
	RangeDescription,
	yaxisTitle,
	tooltipText,
}) => {
	const options = {
		chart: {
			type: "area",
		},
		title: {
			text: title,
		},
		xAxis: {
			allowDecimals: false,
			accessibility: {
				rangeDescription: RangeDescription,
			},
		},
		yAxis: {
			title: {
				text: yaxisTitle,
			},
		},
		tooltip: {
			pointFormat: tooltipText,
		},
		plotOptions: {
			area: {
				pointStart: 1996,
				marker: {
					enabled: false,
					symbol: "circle",
					radius: 2,
					states: {
						hover: {
							enabled: true,
						},
					},
				},
			},
		},
		series: [...DataSeries],
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
export default AreaChart;
