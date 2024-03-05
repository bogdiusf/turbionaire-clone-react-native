import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable, StyleSheet, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Header = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  const notchHeight = insets.top;

  return (
    <View style={styles({}).headerContainer}>
      <View style={styles({ notchHeight }).actions}>
        <Pressable onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person" size={24} color="black" />
        </Pressable>
        <Pressable>
          <Ionicons name="add-circle" size={24} color="#368DF0" />
        </Pressable>
      </View>

      <View style={styles({}).banner}>
        <Text style={styles({}).bannerTitle}>Cozy Home</Text>
        <View style={styles({}).bannerDescriptionContainer}>
          <Text style={styles({}).bannerDescription}>
            Enjoy a cozy life with ambient indicators and device rules.
          </Text>
          <Image
            source={require('../../../assets/home.png')}
            style={styles({}).bannerImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'column',
      gap: 24
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: props.notchHeight
    },
    banner: {
      gap: 12,
      padding: 24,
      borderRadius: 24,
      height: 150,
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
    bannerTitle: {
      fontSize: 12,
      color: '#999'
    },
    bannerDescriptionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    bannerDescription: {
      width: '60%',
      fontSize: 13,
      fontWeight: '500'
    },
    bannerImage: {
      width: '20%',

      aspectRatio: 1 / 1,
      borderRadius: 12,
      backgroundColor: '#0553'
    }
  });

export default Header;
