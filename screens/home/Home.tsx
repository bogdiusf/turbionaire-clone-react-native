import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import DeviceList from './components/device-list/DeviceList';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles({}).container}>
      <Header navigation={navigation} />
      <DeviceList />
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7F5FF',
      padding: 24,
      gap: 32
    }
  });

export default Home;
