import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationControl from './NavigationControl';

const ContactScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const getData = async () => {
    try {
      let name = await AsyncStorage.getItem('name');
      let email = await AsyncStorage.getItem('email');
      setName(name);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  });

  const handleSubmit = () => {
    alert(
      'We have Received Your Query! Our Team Will Reply You Within two Business Days',
    );
  };
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={tw`p-2`}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name :</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              value={name}
              blurOnSubmit={false}
              onChangeText={name => setName(name)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email :</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              value={email}
              blurOnSubmit={false}
              onChangeText={email => setEmail(email)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Message :</Text>
          <TextInput
            style={styles.message}
            placeholder="Enter Message"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            value={message}
            blurOnSubmit={false}
            onChangeText={message => setMessage(message)}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
            <Text style={{color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  inputContainer: {
    padding: 20,
  },
  label: {
    fontWeight: '400',
    fontSize: 15,
    marginLeft: 10,
    marginVertical: 3,
    color: '#000',
  },
  inputStyle: {
    flex: 1,
    width: '100%',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#dadae8',
  },
  message: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    color: 'black',
    height: 200,
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 'auto',
    borderColor: '#dadae8',
  },
  buttonStyle: {
    padding: 12,
    backgroundColor: '#007bfc',
    color: '#fff',
    width: '35%',
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

export default ContactScreen;
