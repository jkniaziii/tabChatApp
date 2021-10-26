import React from 'react';
import { View, Text, Dimensions, } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


export default function List() {
    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
          [60, 60, 60],
          [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return (
      

        <StackedBarChart
  style={{
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#ffd700'
  }}
  data={data}
  width={Dimensions.get("window").width}
  height={220}
  chartConfig={chartConfig}
/>
    )
}
