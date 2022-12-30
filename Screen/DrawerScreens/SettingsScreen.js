import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          height: '100%',
          flexDirection: 'column',
        }}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>Contact Us</Text>
          <Icon name="phone" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>FAQs</Text>
          <Icon name="question-circle" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>About Us</Text>
          <Icon name="info-circle" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Text style={styles.title}>Logout</Text>
          <Icon name="power-off" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    width: '80%',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    alignItems: 'center',
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
  title: {
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default SettingsScreen;
