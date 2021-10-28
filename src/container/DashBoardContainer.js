import { connect } from "react-redux";
import DashBoard from "../dashboard/DashBoard";
import { addChart, removeChart } from "../Services/actions/actions";


const mapStateToProps = state => ({
    data: state.chartItems,
    chartData: state.chartsArray
  });

 

  const mapDispatchToProps=dispatch=>({
    addChartHandler:chartData=>dispatch(addChart(chartData)),
    removeChartHandler:chartData=>dispatch(removeChart(chartData))
   
})


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)