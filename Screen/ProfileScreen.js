import React from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'twrnc';
import NavigationControl from './NavigationControl';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [isPasswordVisible, setIspasswordVisible] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const getUserData = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      if (name && email && password) {
        setName(name);
        setEmail(email);
        setPassword([password]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getUserData();
  });

  const togglePassword = () => {
    if (!isPasswordVisible) {
      setIspasswordVisible(true);
    } else {
      setIspasswordVisible(false);
    }
  };
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={{width: '98%', marginHorizontal: 'auto'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.circle}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../Image/user.webp')}
              />
            </View>
            <Text style={styles.userName}>{name}</Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Name :</Text>
            <Text style={styles.info}>{name}</Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email Address :</Text>
            <Text style={styles.info}>{email}</Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Password :</Text>
            <Text style={styles.info}>
              {isPasswordVisible ? password : '******'}
            </Text>
            <View style={{marginLeft: 'auto'}}>
              <TouchableOpacity
                onPress={() => {
                  togglePassword();
                }}>
                <Icon
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  size={20}
                  color="#454545"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Birth Date :</Text>
            <Text style={styles.info}>20 /Oct/2002</Text>
          </View>
        </View>
      </View>
      <View style={styles.control}>
        <NavigationControl />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#007bfc6e',
    borderRadius: 500,
    width: 500,
    height: 500,
    marginTop: '-70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: '#007bfc6e',
    borderRadius: 100,
  },
  userName: {
    fontWeight: '700',
    fontSize: 25,
    marginTop: 3,
    marginBottom: 30,
    color: '#000000a3',
    textTransform: 'uppercase',
  },
  infoContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#A4A4A4',
    borderBottomWidth: 1,
    padding: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#454545',
  },
  info: {
    fontSize: 18,
    fontWeight: '500',
    color: '#454545',
    marginLeft: 10,
  },

  control: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
