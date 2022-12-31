import {View, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectNaviagtion} from '../slices/navSlice';
import {useSelector} from 'react-redux';

const NavigationControl = () => {
  const navigation = useSelector(selectNaviagtion);
  useEffect(() => {
    if (!navigation) return;
    console.log('navigation 1=> ', navigation);
  }, [navigation]);

  return (
    <View style={styles.control}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Icon name="bell" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  AsyncStorage.clear();
                  navigation.navigate('Auth');
                },
              },
            ],
            {cancelable: false},
          );
        }}>
        <Icon name="power-off" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationControl;
const styles = StyleSheet.create({
  control: {
    width: '90%',
    padding: 15,
    backgroundColor: '#303030',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 30,
    marginBottom: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
