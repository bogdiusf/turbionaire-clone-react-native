import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { DeviceListType } from 'store';

const Device = ({ item }: { item: DeviceListType }) => {
  const [deviceOn, setDeviceOn] = useState(false);
  const [commonFcnToggled, setCommonFcnToggled] = useState(false);

  return (
    <View style={styles({}).deviceCard}>
      <View style={styles({}).cardHeader}>
        {/* @ts-ignore */}
        <Image source={item.logoUrl} style={styles({}).deviceImage} />
        <View style={styles({}).nameWrapper}>
          <Text style={styles({}).name}>{item.name}</Text>
          <Pressable onPress={() => setCommonFcnToggled((prev) => !prev)}>
            <View style={styles({}).commonFunctionsWrapper}>
              <Text style={styles({}).commonFunctionsText}>
                Common Functions
              </Text>
              <AntDesign
                name={commonFcnToggled ? 'up' : 'down'}
                size={10}
                color="green"
              />
            </View>
          </Pressable>
        </View>

        <Pressable
          style={styles({ deviceOn }).powerBtn}
          onPress={() => setDeviceOn((prev) => !prev)}
        >
          <AntDesign name="poweroff" size={18} color={'white'} />
        </Pressable>
      </View>

      {commonFcnToggled ? (
        <View style={styles({ deviceOn }).commonFunctionsExpandedWrapper}>
          <View style={styles({}).commonFcnColOne}>
            <View
              style={{
                ...styles({ deviceOn }).powerBtn,
                backgroundColor: '#03BCEE',
                alignSelf: 'center'
              }}
            >
              <AntDesign name="poweroff" size={10} color="white" />
            </View>
            <View>
              <Text>Power</Text>
              <Text style={{ alignSelf: 'center', color: '#787A7A' }}>
                {deviceOn ? 'ON' : 'OFF'}
              </Text>
            </View>
          </View>

          <View style={{ ...styles({}).commonFcnColOne, gap: 8 }}>
            <View
              style={{
                ...styles({ deviceOn }).powerBtn,
                alignSelf: 'center',
                padding: 0,
                backgroundColor: 'transparent'
              }}
            >
              <FontAwesome6 name="droplet" size={24} color="green" />
            </View>
            <View>
              <Text>Dehumidify</Text>
              <Text style={{ alignSelf: 'center', color: '#787A7A' }}>55%</Text>
            </View>
          </View>
          <View style={{ ...styles({}).commonFcnColOne, gap: 8 }}>
            <View
              style={{
                ...styles({ deviceOn }).powerBtn,
                backgroundColor: 'transparent',
                padding: 0,
                alignSelf: 'center'
              }}
            >
              <MaterialCommunityIcons
                name="view-grid"
                size={24}
                color="#FF7901"
              />
            </View>
            <View>
              <Text style={{ alignSelf: 'center' }}>Mode</Text>
              <Text style={{ alignSelf: 'center', color: '#787A7A' }}>
                Manual
              </Text>
            </View>
          </View>
          <View style={styles({}).commonFcnColOne}>
            <View
              style={{
                ...styles({ deviceOn }).powerBtn,
                backgroundColor: 'transparent',
                padding: 0,
                alignSelf: 'center'
              }}
            >
              <Ionicons name="moon-sharp" size={24} color="#E9BE1E" />
            </View>
            <View>
              <Text>Sleep</Text>
              <Text style={{ alignSelf: 'center', color: '#787A7A' }}>OFF</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    deviceCard: {
      gap: 24,
      padding: 24,
      borderRadius: 24,

      backgroundColor: 'white',
      shadowColor: '#000', // Shadow color
      shadowOffset: {
        width: 0,
        height: 1 // Offset along the Y-axis
      },
      shadowOpacity: 0.05, // Shadow opacity
      shadowRadius: 3.84, // Shadow radius
      elevation: 1
    },
    cardHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    deviceImage: {
      width: '20%',
      aspectRatio: 1 / 1,
      borderRadius: 12
    },
    nameWrapper: {
      gap: 8,
      marginLeft: -24
    },
    name: {
      fontSize: 14,
      fontWeight: '500'
    },
    commonFunctionsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4
    },
    commonFunctionsText: {
      color: 'green',
      fontSize: 12
    },
    powerBtn: {
      padding: 8,
      backgroundColor: props.deviceOn ? 'green' : '#ccc',
      borderRadius: 99
    },
    commonFunctionsExpandedWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      opacity: props.deviceOn ? 1 : 0.5,
      alignItems: 'center'
    },
    commonFcnColOne: {
      gap: 8,
      justifyContent: 'center'
    }
  });

export default Device;
