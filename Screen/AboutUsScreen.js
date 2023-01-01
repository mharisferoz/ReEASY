import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavigationControl from './NavigationControl';

const AboutScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to ReEasy, the ultimate real estate app for finding and
            managing your dream home.
          </Text>
          <Text style={styles.message}>
            At ReEasy, we understand that the process of buying or selling a
            home can be overwhelming and stressful. That's why we've created a
            user-friendly platform that streamlines the entire process, from
            searching for properties to completing the transaction.
          </Text>
          <Text style={styles.message}>
            With ReEasy, you can search for homes in your area or anywhere in
            the country using our comprehensive database. Our app features a
            variety of filters to help you find the perfect property, including
            price, location, and number of bedrooms. You can also save your
            favorite listings and receive notifications when new homes that meet
            your criteria become available.
          </Text>
          <Text style={styles.message}>
            In addition to searching for properties, ReEasy also offers tools to
            help you manage the process of buying or selling a home. You can
            connect with real estate agents, schedule viewings, and even submit
            offers and counteroffers right from the app. We also have resources
            to help you understand the legal aspects of real estate
            transactions, such as contracts and mortgage rates.
          </Text>
          <Text style={styles.message}>
            At ReEasy, we are committed to making the process of buying or
            selling a home as easy and stress-free as possible. Download our app
            today and see how ReEasy can help you find your dream home.
          </Text>
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
  container: {
    padding: 22,
    paddingLeft: 30,
  },
  welcome: {
    lineHeight: 32,
    fontWeight: '600',
    fontSize: 19,
    textTransform: 'capitalize',
    marginVertical: 10,
    color: '#000',
  },
  message: {
    lineHeight: 32,
    fontWeight: '400',
    fontSize: 17,
    textTransform: 'capitalize',
    marginVertical: 10,
    color: '#000',
  },
  control: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AboutScreen;
