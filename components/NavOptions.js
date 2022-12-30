import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Rides',
    image: require('../Image/home.png'),
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Delivery',
    image: require('../Image/sale.png'),
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          //   onPress={()=> navigation.navigate(item.screen)}
          style={tw` pl-6 pb-8 pt-4  m-2 w-40`}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={item.image}
            />
            <Text style={tw`ml-2 text-sm font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
