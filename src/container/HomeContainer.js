import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Home from '../screens/Home';
import { gradientFrom, gradientTo, dotStroke, 
    dotFill, 
    graphStrokeWidth, graphLine, labelColor, 
    graphOpacity,     } from '../Services/actions/actions';


const mapStateToProps = state => ({
    data: state.chartItems,
  });

 

  const mapDispatchToProps=dispatch=>({
       
    gradientFromHandler:data=>dispatch(gradientFrom(data)),
    gradientoHandler:data=>dispatch(gradientTo(data)),
    dotStrokeHandler:data=>dispatch(dotStroke(data)),
    dotFillHandler:data=>dispatch(dotFill(data)),
    graphLineHandler:data=>dispatch(graphLine(data)),
    labelColorHandler:data=>dispatch(labelColor(data)),
    graphOpacityHandler:data=>dispatch(graphOpacity(data)),
    graphStrokeWidthHandler:data=>dispatch(graphStrokeWidth(data)),
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)