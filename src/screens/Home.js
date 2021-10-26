import React, {useState, useEffect} from 'react';
import {ColorPicker} from 'react-native-color-picker';


import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';


export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#fb8c00');
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };
  return (
    <View>
     
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: backgroundColor,
          backgroundGradientTo: backgroundColor,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
     
      <View style={styles.input}>
        <ColorPicker
          onColorSelected={color => setBackgroundColor(color)}
          hideSliders={true}
          style={{width: 250, height: 250}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  },
  btn: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
});
