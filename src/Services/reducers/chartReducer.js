import {ADD_CHART, REMOVE_CHART, DOT_FILL, DOT_STROKE, 
  DOT_STROKE_WIDTH, EDIT_CHART, GRADIENT_FROM, GRADIENT_TO, 
  GRAPH_LINE, GRAPH_OPACITY, LABEL_COLOR} from '../reduxConstants';

const initialStyle = {
  backgroundGradientFrom: 'blue',
  backgroundGradientTo: '#fb8c00',
  dotStroke: 'black',
  dotFill: 'white',
  graphLine: 'red',
  labelColor: 'black',
  dotStrokeWidth: 2,
  graphOpacity: 1,
  visible: false,
};

const initialState = [];


const chartItemsTwo = (state = initialState, action) => {
        
  switch (action.type) {
    case ADD_CHART:
        return  [
            ...state , {component: action.data, id: Date.now() + Math.random(), initialStyle}
        ]

     case REMOVE_CHART:

        var index = state.filter(function(o){
           
            return o.id !== action.data;
       })
      
    
     return   index;

     case EDIT_CHART: 



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
      case EDIT_CHART:
        console.log('actio_________________________',   action.data)
        return {...state, visible: action.data};

       
    default:
      return state;
  }
};

export default chartItemsTwo;
