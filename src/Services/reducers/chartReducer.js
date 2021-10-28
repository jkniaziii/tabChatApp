import {ADD_CHART, REMOVE_CHART} from '../reduxConstants';

const initialStyle = [];
 

const chartItemsTwo = (state = initialStyle, action) => {
         console.log('chartReducer______', action.data)
  switch (action.type) {
    case ADD_CHART:
        return  [
            ...state , action.data
        ]

     case REMOVE_CHART:
         
     return   [...state].splice(action.data, 1);

    default:
      return state;
  }
};

export default chartItemsTwo;
