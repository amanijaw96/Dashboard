import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import Grid from "@mui/material/Grid";
import DougnutChart from "../components/Charts/DougnutChart";
import { Translate } from "../utils/utils";
import AreaChart from "../components/Charts/AreaChart";
import {
	AreaChartData1,
	AreaChartData2,
	BarChartData,
	PieData,
	DoughnutData,
} from "../constants";

const DashboardPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={12} lg={6}>
				<BarChart
					data={BarChartData}
					text={Translate("bar.title")}
					yAxisTitle={Translate("bar.UsersThousands")}
					tooltip={`${Translate(
						"bar.connectedUsers"
					)}<b>{point.y:.1f} ${Translate("thousands")}</b>`}
					DataName={Translate("Population")}
				></BarChart>
			</Grid>
			<Grid item xs={12} md={12} lg={6}>
				<PieChart
					data={PieData}
					title={Translate("pie.title")}
					DataName={Translate("Percentage")}
				></PieChart>
			</Grid>
			<Grid item xs={12} md={12} lg={6}>
				<DougnutChart
					data={DoughnutData}
					DataName={Translate("Users")}
					title={Translate("Users.activeonWeekend")}
				></DougnutChart>
			</Grid>
			<Grid item xs={12} md={12} lg={6}>
				<AreaChart
					DataSeries={[
						{
							name: Translate("Girls"),
							data: AreaChartData1,
						},
						{
							name: Translate("Boys"),
							data: AreaChartData2,
						},
					]}
					title={Translate("AreaChart.title")}
					yaxisTitle={Translate("AreaChart.usersActivity")}
					tooltipText={`{point.y:,.0f} ${Translate(
						"AreaChart.active"
					)} {series.name} in {point.x}`}
				></AreaChart>
			</Grid>
		</Grid>
	);
};

export default DashboardPage;
