import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import {Text} from '@ui-kitten/components';
import NavigationControl from './NavigationControl';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {selectNaviagtion} from '../slices/navSlice';

const HomeScreen = () => {
  const navigation = useSelector(selectNaviagtion);
  useEffect(() => {
    if (!navigation) return;
    console.log('navigation 1=> ', navigation);
  }, [navigation]);

  const [name, setName] = React.useState('');

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const getUserData = async () => {
    try {
      let name = await AsyncStorage.getItem('name');
      setName(name);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserData();
  });

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity
          style={{
            marginLeft: 'auto',
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}></TouchableOpacity>
      </View>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={tw`p-5`}>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '700',
              }}>
              Welcome,
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 24,
                fontWeight: '500',
                textTransform: 'uppercase',
              }}>
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="map-marker" size={30} color="#007bfc" />
            <Text style={{marginLeft: 10, color: '#685e5e', fontWeight: '500'}}>
              Manchester, UK
            </Text>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{fontWeight: '700', fontSize: 30}}>Find Your</Text>
            <Text style={{fontWeight: '700', fontSize: 30}}>
              Best Home Now!
            </Text>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '600'}}>Open / Close Properties</Text>
              <View style={styles.switch}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#007bfc' : '#fff'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddProperty')}
              style={styles.buttonStyle}>
              <Text style={{color: '#fff'}}>Add Property</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 5,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: '800', fontSize: 20}}>Nearby Homes</Text>
            <Icon name="chevron-right" size={20} color="#000" />
          </View>
          <ScrollView
            style={{padding: 10}}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home1.jpg')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Vacation Home
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home2.webp')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Modern Home
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home3.jpeg')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Open Home
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home4.jpeg')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Green Home
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home5.jpeg')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Our Home
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={styles.propertyCard}>
                <Image
                  style={styles.propertyImage}
                  source={require('../Image/home6.jpeg')}
                />
                <View style={styles.propertyDescription}>
                  <Text style={{zIndex: 11, fontWeight: '600', fontSize: 16}}>
                    Home
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.control}>
        <NavigationControl></NavigationControl>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 13,
    color: '#000',
  },
  switch: {
    marginVertical: 10,
    marginRight: 'auto',
  },
  propertyCard: {
    marginVertical: 20,
    width: 200,
    height: 220,
    marginHorizontal: 10,
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    position: 'relative',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyDescription: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffffa3',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    zIndex: 11,
  },
  profileHeaderPicCircle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    width: 200,
    color: 'white',
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  cartStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    width: '22%',
  },
  slideContainer: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  slideImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  selectStyle: {
    borderRadius: 15,
    width: '45%',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
  },
  selectOptionStyle: {
    borderRadius: 15,
  },

  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8080804d',
    height: 40,
    borderRadius: 10,
    margin: 20,
  },

  searchStyle: {
    marginLeft: '5%',
    padding: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  mapSearchStyle: {
    position: 'relative',
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: '#007bfc',
    color: '#fff',

    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  control: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
