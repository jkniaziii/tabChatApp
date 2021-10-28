import {Picker} from '@ant-design/react-native';
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import PieChart from '../screens/Friends ';
import Bezier from '../container/HomeContainer';
import StakBar from '../screens/List';
import Progress from '../screens/Profile ';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalPoup from '../modal/ModalPopup';
import { connect } from 'react-redux';


const DashBoard = (props)=>{
  const [chartArray, setChartArray] = useState([]);
  const [visible, setVisible] = useState(false);
  const bezierHandler = component => {
    const newArray = [...chartArray];
    newArray.push(component);
    setChartArray(newArray);
  };
  const deleteChartHandler = index => {
    const newArray = [...chartArray];
    newArray.splice(index, 1);
    setChartArray(newArray);
  };
  const visibleHandler =()=>{
    setVisible(false);
  }

 console.log('dashBoard___________', props.removeChartHandler)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.btnDash}>
        <View style={styles.dashBoard}>
          <Text style={styles.dashBoardText}>Chart DashBoard</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={()=>props.addChartHandler(<Bezier />)}
            text="Bezier"
            backgroundColor="red"
            iconName="bar-chart"
          />
          <Button
            onPress={()=>props.addChartHandler(<StakBar />)}
            text="StackedBar"
            backgroundColor="green"
            iconName="stats-chart"
          />
          <Button
            onPress={()=>props.addChartHandler(<PieChart />)}
            text="PaiChart"
            backgroundColor="blue"
            iconName="pie-chart"
          />
          <Button
            onPress={()=>props.addChartHandler(<Progress />)}
            text="Progress"
            backgroundColor="#cd5c5c"
            iconName="speedometer"
          />
        </View>
      </View>
      <View>
        {props.chartData.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.touchContainer}>
                <TouchableOpacity onPress={()=>setVisible(true)}>
                  <View style={styles.buttonDlt}>
                    <Text style={styles.btnTxt}>Edit</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.removeChartHandler(index)}>
                  <View style={styles.buttonDlt}>
                    <Text style={styles.btnTxt}>Delete</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: 10}}>{item}</View>
            </View>
          );
        })}
      </View>
      <ScrollView>
        <ModalPoup visible={visible}>
          <View style={styles.touchContainer}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <View style={styles.buttonEdit}>
                <Icon name="close-circle" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
         
            <Bezier 
            visible={visible}/>
       
        </ModalPoup>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonDlt: {
    backgroundColor: 'red',
    width: 50,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonEdit: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  container: {},
  btnDash: {
    margin: 10,
  },
  dashBoard: {
    backgroundColor: '#b8860b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
  },
  dashBoardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  touchContainer: {
    alignSelf: 'flex-end',
    zIndex: 2,
    position: 'absolute',
    margin: 10,
    flexDirection: 'row',
  },
  btnTxt: {
    color: 'white',
  },
  
});



export default DashBoard
