import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavigationControl from '../NavigationControl';
import {useSelector} from 'react-redux';
import {selectNaviagtion} from '../../slices/navSlice';

const SettingsScreen = () => {
  const navigation = useSelector(selectNaviagtion);
  useEffect(() => {
    if (!navigation) return;
    console.log('navigation 1=> ', navigation);
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          height: '100%',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={styles.card}>
          <Text style={styles.title}>Contact Us</Text>
          <Icon name="phone" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Faq')}
          style={styles.card}>
          <Text style={styles.title}>FAQs</Text>
          <Icon name="question-circle" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.card}>
          <Text style={styles.title}>About Us</Text>
          <Icon name="info-circle" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
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
                    navigation.navigate('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Text style={styles.title}>Logout</Text>
          <Icon name="power-off" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.control}>
        <NavigationControl />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 12,
    backgroundColor: '#307ecc',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#fff',
  },
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    width: '80%',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  control: {
    zIndex: 99999,
    backgroundColor: '#fff',
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
