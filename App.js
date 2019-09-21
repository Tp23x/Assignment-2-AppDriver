/*Example of SQLite Database in React Native*/
import React from 'react';
//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import UpdateUser from './pages/Login';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import List from './pages/List';
import TellTeacher from './pages/TellTeacher';
import Tellcarac from './pages/Tellcarac';
import RegisTerChil from './pages/RegisTerChil';
import RegisterSeting from './pages/RegisterSeting';
import RegisterUser from './pages/RegisterUser';
 
const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Care Your Heart',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      title: 'รายชื่อเด็ก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  TellTeacher: {
    screen: TellTeacher,
    navigationOptions: {
      title: 'ติดต่อครูประจำรถ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  Tellcarac: {
    screen: Tellcarac,
    navigationOptions: {
      title: 'ติดต่อรถฉุกเฉิน',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  RegisTerChil: {
    screen: RegisTerChil,
    navigationOptions: {
      title: 'เพิ่มสมาชิก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAllUser: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'เข้าสู่ระบบ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'สมัครสมาชิก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  RegisterSeting: {
    screen: RegisterSeting,
    navigationOptions: {
      title: 'ตั้งค่าระบบ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#000000',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);