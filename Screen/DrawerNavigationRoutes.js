// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
// import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailViewScreen from './DetailViewScreen';
import NotificationScreen from './NotificationScreen';
import FaqScreen from './Components/FaqScreen';
import AboutScreen from './AboutUsScreen';
import ContactScreen from './ContactUsScreen';
import AddProperty from './AddPropertyScreen';
import {useDispatch} from 'react-redux';
import {setNaviagtion} from '../slices/navSlice';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ControlNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen
        name=""
        component={ControlNavigation}
        labelStyle={{color: '#ffffff'}}
        itemStyle={{color: '#ffffff'}}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        labelStyle={{color: '#ffffff'}}
        itemStyle={{color: '#ffffff'}}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#ffffff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#ffffff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Settings"
        itemStyle={{color: '#ffffff'}}
        labelStyle={{color: '#ffffff'}}
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (props && setNaviagtion && dispatch) {
      dispatch(setNaviagtion({...props.navigation}));
    }
  }, []);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: '#cee1f2',
        color: '#ffffff',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{
          drawerLabel: 'Home Screen',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="ProfleScreenStack"
        options={{
          drawerLabel: 'Profile Screen',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Detail"
        options={{
          drawerLabel: 'Detail View',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={DetailViewScreen}
      />
      <Drawer.Screen
        name="Notification"
        options={{
          drawerLabel: 'Notifications',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={NotificationScreen}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: 'Settings',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="Faqs"
        options={{
          drawerLabel: 'FAQs',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={FaqScreen}
      />
      <Drawer.Screen
        name="About"
        options={{
          drawerLabel: 'About Us',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={AboutScreen}
      />
      <Drawer.Screen
        name="Contact"
        options={{
          drawerLabel: 'Contact Us',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={ContactScreen}
      />
      <Drawer.Screen
        name="Add Property"
        options={{
          drawerLabel: 'Add Property',
          drawerLabelStyle: {color: '#fff'},
        }}
        component={AddProperty}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
