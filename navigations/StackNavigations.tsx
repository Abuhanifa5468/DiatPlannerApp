import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Home Screen
import HomeScreen from '../screens/DashBoard';

// Search Screen
import SearchScreen from '../screens/SearchScreen';

// Cart Screen
import CartScreen from '../screens/CartScreen';

// User Profile Screen
import UserProfileScreen from '../screens/UserProfileScreen';

//  Auth Screen
import LoginScreen from '../screens/LoginScreen';
import GroupScreen from '../screens/Group/GroupScreen';
import DashBoardScreen from '../screens/DashBoard';

const StackConfig = {headerShown: false};

const DashBoardStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const GroupStack = createNativeStackNavigator();

export function DashBoard(props: any) {
  return (
    <DashBoardStack.Navigator screenOptions={StackConfig}
    initialRouteName='DashBoardScreen'
    >
      <DashBoardStack.Screen name="DashBoardScreen" component={DashBoardScreen} />
    </DashBoardStack.Navigator>
  );
}

export function Search(props: any) {
  return (
    <SearchStack.Navigator screenOptions={StackConfig} 
    initialRouteName='SearchScreen'
    >
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

export function Cart(props: any) {
  return (
    <CartStack.Navigator screenOptions={StackConfig}>
      <CartStack.Screen name="CartScreen" component={CartScreen} />
    </CartStack.Navigator>
  );
}
export function Group(props: any) {
  return (
    <GroupStack.Navigator
      initialRouteName="GroupScreen"
      screenOptions={StackConfig}>
      <GroupStack.Screen name="GroupScreen" component={GroupScreen} />
    </GroupStack.Navigator>
  );
}
export function Account(props: any) {
  return (
    <UserStack.Navigator
      initialRouteName="UserProfileScreen"
      screenOptions={StackConfig}>
      <UserStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
      />
    </UserStack.Navigator>
  );
}

export function Login(props: any) {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={StackConfig}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
