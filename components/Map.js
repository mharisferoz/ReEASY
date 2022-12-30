import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import tw from 'twrnc';
import MapView, {Marker} from 'react-native-maps';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!origin || !destination) return;
    console.log('origin => ', origin);
    console.log('destination => ', destination);
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      console.log('-------------------------------------------');
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=
            ${origin.description}&destinations=${destination.description}&key=AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ`)
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination]);

  return (
    <MapView
      style={styles.map}
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard">
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey="AIzaSyCIJj0VZxjD4M1tsFnuChyoRMGc6eV97KQ"
          strokeWidth={3}
          strokeColor="hotpink"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: 300,
    ...StyleSheet.absoluteFillObject,
  },
});
