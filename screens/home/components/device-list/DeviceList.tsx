import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Device from './components/Device';
import useStore from 'store';

const DeviceList = () => {
  const { deviceList } = useStore();

  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Devices</Text>
        <Pressable onPress={() => setOpen(true)}>
          <Entypo name="dots-three-horizontal" size={24} color="#7C7D81" />
        </Pressable>
      </View>

      <FlatList
        renderItem={({ item }) => <Device item={item} />}
        data={deviceList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24
  }
});

export default DeviceList;
