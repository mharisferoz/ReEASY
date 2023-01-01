import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import tw from 'twrnc';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import NavigationControl from '../NavigationControl';

const FaqComponent = ({faq}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (isExpanded ? setIsExpanded(false) : setIsExpanded(true))}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{faq.question}</Text>
        <Icon name={isExpanded ? 'minus' : 'plus'} size={15} color="#b7b7b7" />
      </View>

      {isExpanded ? (
        <View style={styles.questionContainer}>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const FaqScreen = () => {
  const faqs = [
    {
      question: 'How does ReEasy work?',
      answer:
        'ReEasy is a platform that allows users to search for properties, connect with real estate agents, and manage the process of buying or selling a home. Users can search for properties using a variety of filters, save their favorite listings, and receive notifications when new homes that meet their criteria become available. The app also offers tools to help users schedule viewings, submit offers and counteroffers, and understand the legal aspects of real estate transactions.',
    },
    {
      question: 'ReEasy available in my area?',
      answer:
        'ReEasy is available nationwide. You can search for properties in your area or anywhere in the country using our comprehensive database.',
    },
    {
      question: 'Do I need to be a real estate agent to use ReEasy?',
      answer:
        'No, ReEasy is designed for both buyers and sellers. You can use the app to search for properties and connect with real estate agents, or list your own property for sale.',
    },
    {
      question: 'How much does ReEasy cost?',
      answer:
        'ReEasy is free to download and use. However, certain features may require a subscription or additional fees.',
    },
    {
      question: 'How do I contact ReEasy for support or questions?',
      answer:
        'You can contact ReEasy through the to the contact us section and write us a query We are here to help with any questions or issues you may have.',
    },
    {
      question: 'Can I search for rental properties on ReEasy?',
      answer:
        'Yes, ReEasy allows you to search for both purchase and rental properties. You can use the app to find apartments, houses, and other rental properties in your area or anywhere in the country. You can also use the filters to narrow down your search based on factors such as price, location, and number of bedrooms.',
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FAQs</Text>
      </View>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={styles.faqContainer}>
          {faqs.map((faq, i) => (
            <FaqComponent key={i} faq={faq} />
          ))}
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
  faqContainer: {
    width: '90%',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 10,
    elevation: 3,
  },
  container: {
    padding: 20,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  question: {
    width: '85%',
    lineHeight: 25,
    fontWeight: '500',
    fontSize: 17,
    color: '#000',
  },
  answer: {
    marginTop: 10,
    width: '100%',
    lineHeight: 30,
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  control: {
    padding: 10,
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default FaqScreen;
