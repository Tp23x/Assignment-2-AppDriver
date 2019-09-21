import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class RegisterUser extends React.Component {
 
    render() {
      return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
  
              
               <Mybutton
            title="View All"
            customClick={() => this.props.navigation.navigate('ViewAllUser')}
          />
          <Mybutton
            title="View"
            customClick={() => this.props.navigation.navigate('View')}
          />
         
          <Mybutton
            title="Delete"
            customClick={() => this.props.navigation.navigate('Delete')}
          />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      );
    }
  }