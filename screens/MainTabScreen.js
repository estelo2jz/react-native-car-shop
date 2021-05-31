import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProductScreen from './ProductScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ProductStack = createStackNavigator();
const CartStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: '',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Shopping"
      component={ProductStackScreen}
      options={{
        tabBarLabel: '',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon2 name="shopping" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: '',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartStackScreen}
      options={{
        tabBarLabel: '',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="cart" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

// const DetailsStackScreen = ({ navigation }) => (
//   <DetailsStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#1f65ff',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>
//     <DetailsStack.Screen name="Shopping" component={DetailsScreen} options={{
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </DetailsStack.Navigator>
// );

const ProductStackScreen = ({ navigation }) => (
  <ProductStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProductStack.Screen name="Product" component={ProductScreen} options={{
      title: 'Shop',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ProductStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      title: 'Account',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ProfileStack.Navigator>
);

const CartStackScreen = ({ navigation }) => (
  <CartStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CartStack.Screen name="Cart" component={CartScreen} options={{
      title: 'Cart',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </CartStack.Navigator>
);