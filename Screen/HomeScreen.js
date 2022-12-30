import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Switch,
  Button,
} from 'react-native';
import * as React from 'react';
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setOrigin, setDestination} from '../slices/navSlice';
import SelectDropdown from 'react-native-select-dropdown';
import {Tab, TabBar, Card, Text} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import Map from '../components/Map';
import NavigationControl from './NavigationControl';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RideTitle = props => (
  <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
    <Icon
      {...props}
      style={tw`mr-4`}
      name="car-sport-outline"
      type="ionicon"
      color="black"
      size={25}
    />
    <Text style={{fontSize: 21}}>Rides</Text>
  </View>
);

const DeliveryTitle = props => (
  <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
    <Icon
      {...props}
      style={tw`mr-4`}
      name="fast-food-outline"
      type="ionicon"
      color="black"
      size={25}
    />
    <Text style={{fontSize: 21}}>Delivery</Text>
  </View>
);
const Header = props => (
  <View {...props} style={{padding: 0}}>
    <Image
      style={{
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      }}
      source={require('../Image/card1.jpg')}></Image>
  </View>
);
const Header2 = props => (
  <View {...props} style={{padding: 0}}>
    <Image
      style={{
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      }}
      source={require('../Image/laptop.jpeg')}></Image>
  </View>
);

const Header3 = props => (
  <View {...props} style={{padding: 0}}>
    <Image
      style={{
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      }}
      source={require('../Image/phone.jpeg')}></Image>
  </View>
);

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [origin, setNewOrigin] = React.useState({});
  const [destination, setNewDestination] = React.useState({});

  const [name, setName] = React.useState('');

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const options = ['Delivery', 'Ride'];

  const getUserData = async () => {
    try {
      let name = await AsyncStorage.getItem('name');
      setName(name);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollEnabled = true;

  const handleTab = () => {
    if (selectedIndex == 0) {
      return renderDeliveryTab();
    } else {
      return renderRidesTab();
    }
  };

  const renderDeliveryTab = () => {
    return (
      <View>
        <View style={{backgroundColor: 'transparent'}}>
          <GooglePlacesAutocomplete
            placeholder="Your Pickup location ?"
            textInputProps={{placeholderTextColor: '#452f2fd1'}}
            styles={{
              container: {
                flex: 0,
              },
              description: {color: 'black'},
              textInput: {
                fontSize: 18,
                backgroundColor: '#8080804d',
                placeholderTextColor: 'green',
                color: 'black',
                borderRadius: 20,
                marginTop: 30,
                marginBottom: 10,
              },
              listView: {
                top: 75,
                position: 'absolute',
                color: 'black',
                borderWidth: 0.5,
                borderColor: '#8080804d',
                backgroundColor: 'white',
                width: '100%',
                borderRadius: 10,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );
              setNewOrigin({
                location: details.geometry.location,
                description: data.description,
              });
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: 'AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ',
              language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={100}
          />
        </View>
        <GooglePlacesAutocomplete
          listViewDisplayed="auto"
          placeholder="Your Destination ?"
          textInputProps={{placeholderTextColor: '#452f2fd1'}}
          styles={{
            container: {
              flex: 0,
              zIndex: -1,
            },
            description: {color: 'black'},
            textInput: {
              fontSize: 18,
              backgroundColor: '#8080804d',
              color: 'black',
              borderRadius: 20,
              marginTop: 30,
              marginBottom: 10,
            },
            listView: {
              top: 75,
              position: 'absolute',
              color: 'black',
              backgroundColor: 'white',
              width: '100%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: '#8080804d',
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            setNewDestination({
              location: details.geometry.location,
              description: data.description,
            });
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: 'AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ',
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={100}
        />
        {origin?.location && destination?.location && (
          <View style={{zIndex: -11}}>
            <View style={{marginBottom: 320}}>
              <Map />
            </View>
            <View>
              <View style={{marginVertical: 10, zIndex: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Picking Location :
                </Text>
                <Text
                  style={{fontSize: 15, marginTop: 10, fontWeight: 'normal'}}>
                  {origin.description}
                </Text>
              </View>

              <View style={{marginVertical: 10, zIndex: -1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Destination Location :
                </Text>
                <Text
                  style={{fontSize: 15, marginTop: 10, fontWeight: 'normal'}}>
                  {destination.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  const renderRidesTab = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}>
        <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20}}>
          <View style={{width: '25%'}}>
            <Text>Deliver Now</Text>
            <Text style={tw`text-black font-bold`}>56 Ocean DI</Text>
          </View>

          <SelectDropdown
            buttonStyle={styles.selectStyle}
            dropdownStyle={styles.selectOptionStyle}
            data={options}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />

          <View style={styles.cartStyle}>
            <Icon name="cart-outline" type="ionicon" color="white" size={25} />
            <Text style={{color: 'white', marginLeft: 10}}>0</Text>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          scrollEnabled={scrollEnabled}
          style={{paddingTop: 10, paddingBottom: 15}}
          horizontal={true}>
          <View style={styles.slideContainer}>
            <Image
              style={styles.slideImage}
              source={require('../Image/deals.png')}
            />
            <Text style={{fontSize: 15, color: '#000', marginTop: 10}}>
              Deals
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={styles.slideImage}
              source={require('../Image/baby.png')}
            />
            <Text style={{fontSize: 15, color: '#000', marginTop: 10}}>
              Baby
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={styles.slideImage}
              source={require('../Image/pharmacy.png')}
            />
            <Text style={{fontSize: 15, color: '#000', marginTop: 10}}>
              Pharmacy
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={styles.slideImage}
              source={require('../Image/fastfood.png')}
            />
            <Text style={{fontSize: 15, color: '#000', marginTop: 10}}>
              Convenience
            </Text>
          </View>
          <View style={styles.slideContainer}>
            <Image
              style={styles.slideImage}
              source={require('../Image/grocery.png')}
            />
            <Text style={{fontSize: 15, color: '#000', marginTop: 10}}>
              Grocery
            </Text>
          </View>
        </ScrollView>
        <View style={styles.inputContainerStyle}>
          <Image
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png',
            }}
            style={styles.searchStyle}
          />
          <TextInput
            style={{marginLeft: '3%'}}
            placeholder="Search food, drinks, grocery"
          />
        </View>
        <View style={{paddingBottom: 50}}>
          <Card header={Header} style={{padding: 0}}>
            <View
              style={{
                padding: 0,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Wendy's (99700 S Overseas Hwy)</Text>
                <Text>4.7*</Text>
              </View>
              <Text style={{margin: 0}}>$0 Delivery Fee 10-25 min</Text>
            </View>
          </Card>
          <Card header={Header3} style={{padding: 0}}>
            <View
              style={{
                padding: 0,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Best Selling Smart Phone (99700$)</Text>
                <Text>4.7*</Text>
              </View>
              <Text style={{margin: 0}}>$0 Delivery Fee 20-25 min</Text>
            </View>
          </Card>
          <Card header={Header2} style={{padding: 0}}>
            <View
              style={{
                padding: 0,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Modern Laptop (1000$)</Text>
                <Text>4.7*</Text>
              </View>
              <Text style={{margin: 0}}>$0 Delivery Fee 30-45 min</Text>
            </View>
          </Card>
          <Card header={Header} style={{padding: 0}}>
            <View
              style={{
                padding: 0,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Wendy's (99700 S Overseas Hwy)</Text>
                <Text>4.7*</Text>
              </View>
              <Text style={{margin: 0}}>$0 Delivery Fee 10-25 min</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  };

  React.useEffect(() => {
    getUserData();
  });

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
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
              fontWeight: '600',
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
          <Text style={{fontWeight: '700', fontSize: 30}}>Best Home Now!</Text>
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
          <TouchableOpacity style={styles.buttonStyle}>
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
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.propertyCard}>
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
            <TouchableOpacity style={styles.propertyCard}>
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
            <TouchableOpacity style={styles.propertyCard}>
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
            <TouchableOpacity style={styles.propertyCard}>
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
            <TouchableOpacity style={styles.propertyCard}>
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
            <TouchableOpacity style={styles.propertyCard}>
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
      <View style={styles.control}>
        <NavigationControl></NavigationControl>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  switch: {
    marginVertical: 10,
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
