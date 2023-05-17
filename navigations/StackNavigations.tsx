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
import LoginScreen from '../screens/LoginScreen'
import GroupScreen from '../screens/Group/GroupScreen';




const StackConfig = {headerShown: false};

const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export function DashBoard(props: any) {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      
    </HomeStack.Navigator>
  );
}

export function Search(props: any) {
  return (
    <SearchStack.Navigator screenOptions={StackConfig}>
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
    <UserStack.Navigator
      initialRouteName="UserProfileScreen"
      screenOptions={StackConfig}>
      <UserStack.Screen
        name="GroupScreen"
        component={GroupScreen}
      />
     
    </UserStack.Navigator>
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
