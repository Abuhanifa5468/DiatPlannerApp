import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import { Search,Cart, DashBoard, Group, Account } from './StackNavigations';

const BottomTab = createBottomTabNavigator();

const config = {headerShown: false};

export default function BottomTabNavigation(props:any) {
  return (
    <BottomTab.Navigator
      screenOptions={config}
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen name="DashBoard" component={DashBoard} />
      <BottomTab.Screen name="Group" component={Group} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Cart" component={Cart} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
}
