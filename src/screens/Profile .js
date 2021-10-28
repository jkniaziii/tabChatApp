import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function Profile () {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
      };
      const chartConfig = {
        backgroundGradientFrom: "black",
        backgroundGradientFromOpacity: 0.7,
        backgroundGradientTo: "black",
        backgroundGradientToOpacity: 0.7,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return (
        <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={{
         
          borderRadius: 16,
        }}
      />
    )
}
