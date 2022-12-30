import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useDispatch } from "react-redux";
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from './NavFavourites';
import { Icon } from "@rneui/themed";

const NavigationCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                onPress={(data,details = null )=> {
                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })   
                    ); 
                    navigation.navigate("RideOptionsCard");
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch" 
                debounce={400} 
            />
        </View>

        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}> 
        <TouchableOpacity 
            onPress={()=> navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon
                name="home" 
                color="white" 
                type="font-awesome"
                size={16}
            />
            <Text style={tw`text-white text-center`}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon
                name="fast-food-outline" 
                color="black" 
                type="ionicon"
                size={16}
            />
            <Text style={tw`text-center`}>Sale</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop: 20,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius: 20,
        fontSize:18
    },
    textInputContainer:{
     paddingHorizontal:20,
     paddingBottom:0,   
    }
})