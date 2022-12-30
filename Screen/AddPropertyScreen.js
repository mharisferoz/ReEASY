import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import {Geocoder} from 'react-native-geocoder-reborn';
import tw from 'twrnc';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const AddProperty = () => {
  const [isApprovalScreen, setIsApprovalScreen] = React.useState(false);

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [price, setPrice] = useState('');
  const [homeType, setHomeType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [waterfront, setWaterfront] = useState(false);
  const [garage, setGarage] = useState(false);
  const [pool, setPool] = useState(false);
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const onMapPress = e => {
    setLatitude(e.nativeEvent.coordinate.latitude);
    setLongitude(e.nativeEvent.coordinate.longitude);
  };

  const validateAddress = () => {
    Geocoder.geocode(`${address1}, ${city}, ${state} ${zip}`)
      .then(res => {
        if (res.length > 0) {
          setLatitude(res[0].position.lat);
          setLongitude(res[0].position.lng);
        } else {
          alert('Invalid address, please try again.');
          setAddress1('');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {isApprovalScreen ? 'Approval' : 'Add Property'}
        </Text>
      </View>

      <View style={tw`h-full p-5`}>
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          {/* <GooglePlacesAutocomplete
            disabled={isApprovalScreen}
            placeholder="Address 1"
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            keyboardAppearance={'light'}
            listViewDisplayed={false}
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details) => {
              setAddress1(details.formatted_address);
            }}
            getDefaultValue={() => address2}
            query={{
              key: 'AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ',
              language: 'en',
              types: '(cities)',
            }}
            styles={{
              textInputContainer: {...styles.input},
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            currentLocation={false}
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch"
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              type: 'cafe',
            }}
            GooglePlacesDetailsQuery={{
              fields: 'formatted_address',
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            debounce={100}
          />

          <GooglePlacesAutocomplete
            disabled={isApprovalScreen}
            placeholder="Address 2"
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            keyboardAppearance={'light'}
            listViewDisplayed={false}
            fetchDetails={true}
            renderDescription={row => row.description}
            onPress={(data, details) => {
              setAddress2(details.formatted_address);
            }}
            getDefaultValue={() => address2}
            query={{
              key: 'AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ',
              language: 'en',
              types: '(cities)',
            }}
            styles={{
              textInputContainer: {
                ...styles.input,
                ...disabledInputStyle,
                padding: 0,
              },
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            currentLocation={false}
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch"
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              type: 'cafe',
            }}
            GooglePlacesDetailsQuery={{
              fields: 'formatted_address',
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            debounce={200}
          /> */}

          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={city}
            onChangeText={setCity}
            placeholder="City"
          />
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={state}
            onChangeText={setState}
            placeholder="State"
          />
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={zip}
            onChangeText={setZip}
            placeholder="Zip"
            onEndEditing={validateAddress}
            keyboardType="number-pad"
          />
          <TextInput
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={price}
            onChangeText={setPrice}
            placeholder="List Price"
            keyboardType="number-pad"
          />
          <View style={styles.homeTypeContainer}>
            <Text style={styles.homeTypeLabel}>Home Type:</Text>
            <View style={styles.homeTypeOptions}>
              <TouchableOpacity
                style={[
                  styles.homeTypeOption,
                  homeType === 'Single Family' && styles.selectedOption,
                ]}
                onPress={() => setHomeType('Single Family')}>
                <Text
                  style={[
                    styles.homeTypeOptionText,
                    homeType === 'Single Family' && styles.selectedOptionText,
                  ]}>
                  Single Family
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.homeTypeOption,
                  homeType === 'Condo' && styles.selectedOption,
                ]}
                onPress={() => setHomeType('Condo')}>
                <Text
                  style={[
                    styles.homeTypeOptionText,
                    homeType === 'Condo' && styles.selectedOptionText,
                  ]}>
                  Condo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.homeTypeOption,
                  homeType === 'Mobile Home' && styles.selectedOption,
                ]}
                onPress={() => setHomeType('Mobile Home')}>
                <Text
                  style={[
                    styles.homeTypeOptionText,
                    homeType === 'Mobile Home' && styles.selectedOptionText,
                  ]}>
                  Mobile Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={bedrooms}
            onChangeText={setBedrooms}
            placeholder="No. of Bedrooms"
            keyboardType="number-pad"
          />
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={bathrooms}
            onChangeText={setBathrooms}
            placeholder="No. of Bathrooms"
            keyboardType="number-pad"
          />
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, isApprovalScreen ? disabledInputStyle : {}]}
            value={squareFeet}
            onChangeText={setSquareFeet}
            placeholder="Living Area Square Feet"
            keyboardType="number-pad"
          />
          <View style={styles.amenitiesContainer}>
            <Text style={styles.amenitiesLabel}>Amenities:</Text>
            <View style={styles.amenitiesOptions}>
              <TouchableOpacity
                style={[
                  styles.amenityOption,
                  waterfront && styles.selectedOption,
                ]}
                onPress={() => setWaterfront(!waterfront)}>
                <Text
                  style={[
                    styles.amenityOptionText,
                    waterfront && styles.selectedOptionText,
                  ]}>
                  Waterfront
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.amenityOption, garage && styles.selectedOption]}
                onPress={() => setGarage(!garage)}>
                <Text
                  style={[
                    styles.amenityOptionText,
                    garage && styles.selectedOptionText,
                  ]}>
                  Garage
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.amenityOption, pool && styles.selectedOption]}
                onPress={() => setPool(!pool)}>
                <Text
                  style={[
                    styles.amenityOptionText,
                    pool && styles.selectedOptionText,
                  ]}>
                  Pool
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            disabled={isApprovalScreen}
            style={[styles.input, styles.descriptionInput]}
            value={description}
            onChangeText={setDescription}
            placeholder="Description of Property"
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.picturesContainer}>
            <Text style={styles.picturesLabel}>Pictures:</Text>
            <View style={styles.picturesGrid}>
              {pictures.map((picture, index) => (
                <View key={index} style={styles.pictureWrapper}>
                  <Image source={{uri: picture.uri}} style={styles.picture} />
                  <TouchableOpacity
                    style={styles.pictureRemove}
                    onPress={() => {
                      const updatedPictures = [...pictures];
                      updatedPictures.splice(index, 1);
                      setPictures(updatedPictures);
                    }}>
                    <Text style={styles.pictureRemoveText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
              {pictures.length < 10 && (
                <TouchableOpacity
                  style={styles.pictureAdd}
                  onPress={() => {
                    // Open image picker and add selected image to pictures array
                  }}>
                  <Text style={styles.pictureAddText}>+ Add</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.mapContainer}>
            <Text style={styles.mapLabel}>Map:</Text>
            {latitude && longitude ? (
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude,
                  longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onPress={onMapPress}>
                <Marker coordinate={{latitude, longitude}} />
              </MapView>
            ) : (
              <Text style={styles.mapError}>
                Please enter a valid address to see the map.
              </Text>
            )}
            {isApprovalScreen ? (
              <>
                <View style={[styles.buttonContainer, styles.buttonFlex]}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttons]}
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.reject, styles.buttons]}
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add Property</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const disabledInputStyle = {
  backgroundColor: '#ddd',
  color: '#999',
};

const styles = {
  header: {
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    padding: 16,
  },
  container: {
    padding: 16,
    marginTop: 100,
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderRadius: 12,
  },
  homeTypeContainer: {
    marginBottom: 16,
  },
  homeTypeLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  homeTypeOptions: {
    flexDirection: 'row',
  },
  homeTypeOption: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginRight: 8,
  },
  homeTypeOptionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#ddd',
  },
  selectedOptionText: {
    color: '#333',
  },
  amenitiesContainer: {
    marginBottom: 16,
  },
  amenitiesLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  amenitiesOptions: {
    flexDirection: 'row',
  },
  amenityOption: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginRight: 8,
  },
  amenityOptionText: {
    fontSize: 16,
  },
  descriptionInput: {
    height: 128,
  },
  picturesContainer: {
    marginBottom: 16,
  },
  picturesLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  picturesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pictureWrapper: {
    width: '33.333%',
    height: 200,
    position: 'relative',
  },
  picture: {
    width: '100%',
    height: '100%',
  },
  pictureRemove: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 4,
  },
  pictureRemoveText: {
    color: '#fff',
    fontSize: 12,
  },
  pictureAdd: {
    width: '33.333%',
    height: 200,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureAddText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
  },
  mapContainer: {
    marginBottom: 16,
  },
  mapLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  map: {
    width: '100%',
    height: 200,
  },
  mapError: {
    color: '#f00',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 150,
  },
  button: {
    backgroundColor: '#007bfc',
    padding: 12,
    width: '80%',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 5,
  },
  reject: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonFlex: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    margin: 0,
  },
};

export default AddProperty;
