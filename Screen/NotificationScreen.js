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

const NotificationScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity
          style={{
            marginLeft: 'auto',
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="check" size={15} color="#2b71e2" />
          <Text style={{color: '#2b71e2', marginLeft: 5, fontWeight: '600'}}>
            Mark as Read
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={tw`p-2`}>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>

          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationContainer}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.important}>John Doe</Text>
                <Text style={styles.message}>Want yours</Text>
                <Text style={styles.important}>Apporoval</Text>
                <Text style={styles.message}>For the listing of</Text>
                <Text style={styles.important}>Property.</Text>
              </View>
            </View>
            <Text style={styles.time}>Dec 23, 2022 at 5:31 PM</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{marginLeft: 'auto', marginRight: 'auto', paddingVertical: 20}}>
        <NavigationControl />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 13,
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
    fontWeight: '600',
    marginLeft: 13,
    color: '#000',
  },
  circleContainer: {
    paddingTop: 10,
    marginHorizontal: 4,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#007bfc',
    marginHorizontal: 5,
  },
  notification: {
    padding: 10,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
  },
  notificationContainer: {
    flexDirection: 'row',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  important: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 3,
    lineHeight: 25,
    color: '#000',
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 3,
    lineHeight: 25,
    color: '#000',
  },
  time: {
    fontSize: 13,
    marginLeft: 30,
    padding: 3,
    color: '#777777',
  },
});

export default NotificationScreen;
