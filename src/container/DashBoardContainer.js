import { connect } from "react-redux";
import DashBoard from "../dashboard/DashBoard";
import { addChart, editChart, removeChart,
  gradientFrom, gradientTo, dotStroke, 
  dotFill, 
  graphStrokeWidth, graphLine, labelColor, 
  graphOpacity,    } from "../Services/actions/actions";


const mapStateToProps = state => ({
    data: state.chartItems,
    chartData: state.chartsArray
  });

 

  const mapDispatchToProps=dispatch=>({
    addChartHandler:chartData=>dispatch(addChart(chartData)),
    removeChartHandler:chartData=>dispatch(removeChart(chartData)),
    editCHartHandler:data=>dispatch(editChart(data)),

    gradientFromHandler:data=>dispatch(gradientFrom(data)),
    gradientoHandler:data=>dispatch(gradientTo(data)),
    dotStrokeHandler:data=>dispatch(dotStroke(data)),
    dotFillHandler:data=>dispatch(dotFill(data)),
    graphLineHandler:data=>dispatch(graphLine(data)),
    labelColorHandler:data=>dispatch(labelColor(data)),
    graphOpacityHandler:data=>dispatch(graphOpacity(data)),
    graphStrokeWidthHandler:data=>dispatch(graphStrokeWidth(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)