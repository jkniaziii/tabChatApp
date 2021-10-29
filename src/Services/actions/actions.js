import { DOT_FILL, DOT_STROKE_WIDTH, DOT_STROKE, GRADIENT_FROM, GRADIENT_TO, GRAPH_LINE, GRAPH_OPACITY, LABEL_COLOR, ADD_CHART, REMOVE_CHART, EDIT_CHART } from "../reduxConstants"



export const gradientFrom =(data)=>{
   
    return {
        type:GRADIENT_FROM,
        data:data
    }
}

export const gradientTo =(data)=>{
    return {
        type:GRADIENT_TO,
        data:data
    }
}
export const dotStroke =(data)=>{
    return {
        type:DOT_STROKE,
        data:data
    }
}
export const dotFill =(data)=>{
    return {
        type:DOT_FILL,
        data:data
    }
}
export const graphLine =(data)=>{
    return {
        type:GRAPH_LINE,
        data:data
    }
}
export const labelColor =(data)=>{
    return {
        type:LABEL_COLOR,
        data:data
    }
}
export const graphOpacity =(data)=>{
    return {
        type:GRAPH_OPACITY,
        data:data
    }
} 

export const graphStrokeWidth =(data)=>{
    return {
        type:DOT_STROKE_WIDTH,
        data:data
    }
} 

export const addChart = (data) =>{
    return {
        type: ADD_CHART,
        data: data,
    }
}

export const removeChart = (data) =>{
    return {
        type: REMOVE_CHART,
        data: data,
    }
}

export const editChart = (data)=>{
    console.log('actio_________________________',   data)
    return{
        type: EDIT_CHART,
        data: data
    }
}