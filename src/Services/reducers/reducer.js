import {DOT_FILL, DOT_STROKE, DOT_STROKE_WIDTH, GRADIENT_FROM, GRADIENT_TO, GRAPH_LINE, GRAPH_OPACITY, LABEL_COLOR} from '../reduxConstants';

const initialStyle = {
  backgroundGradientFrom: 'blue',
  backgroundGradientTo: '#fb8c00',
  dotStroke: 'black',
  dotFill: 'white',
  graphLine: 'red',
  labelColor: 'black',
  dotStrokeWidth: 2,
  graphOpacity: 1,
};


const chartItems = (state = initialStyle, action) => {
  
  switch (action.type) {
    case GRADIENT_FROM:
      return {...state, backgroundGradientFrom: action.data};

    case GRADIENT_TO:
      return {...state, backgroundGradientTo: action.data};
    case DOT_STROKE:
      return {...state, dotStroke: action.data};
    case DOT_FILL:
      return {...state, dotFill: action.data};
    case GRAPH_LINE:
      return {...state, graphLine: action.data};
    case LABEL_COLOR:
      return {...state, labelColor: action.data};
    case GRAPH_OPACITY:
      return {...state, graphOpacity: Number(action.data)};
    case DOT_STROKE_WIDTH:
      return {...state, dotStrokeWidth: Number(action.data)};

    default:
      return state;
  }
};

export default chartItems;
