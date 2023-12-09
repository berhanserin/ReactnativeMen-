/* eslint-disable react-native/no-inline-styles */
import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../redux/reducer/AppRedux';
import {RootState} from '../redux/reducer';

const Home = () => {
  const dispatch = useDispatch();
  const {isMenu} = useSelector((state: RootState) => state.app);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          actions.changeMenu({dispatch, changeMenu: !isMenu});
        }}>
        <Text>{isMenu ? 'Close' : 'Open'}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 100,
          }}
          onPress={() => {
            actions.changeMenuColor({dispatch, changeMenuColor: 'red'});
          }}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#1e1e23',
            borderRadius: 100,
            marginLeft: 10,
          }}
          onPress={() => {
            actions.changeMenuColor({dispatch, changeMenuColor: '#1e1e23'});
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
