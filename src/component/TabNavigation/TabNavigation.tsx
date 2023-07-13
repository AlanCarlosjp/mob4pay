import { FC } from "react";
import { RouteName } from "../../../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ACTIVE_COLOR, INACTIVE_COLOR, NAVIGATION_COLOR, WHITE_COLOR } from "../../../consts";
import GraficsScreen from "../../pages/GraficsScreen";
import HomeScreen from "../../pages/HomeScreen";
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const selectIcon = (focused: boolean, routeName: RouteName): string => {
    switch(routeName){
      case 'Home': 
        return focused ? 'wallet' : 'wallet-outline';
      case 'Grafics': 
        return focused ? 'analytics' : 'analytics-outline';
      default: 
        return '';
    }
};
  
const TabNavigation: FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: NAVIGATION_COLOR,
        display: 'flex'
      },
      tabBarActiveTintColor: ACTIVE_COLOR,
      tabBarInactiveTintColor: INACTIVE_COLOR,
      tabBarIcon: ({ focused, color, size }) => (
        //@ts-ignore
        <Ionicons name={selectIcon(focused, route.name as RouteName)} 
        size={size} color={focused ? WHITE_COLOR : color} />
      ),
    })}
  >
    <Tab.Screen name="Grafics" 
    component={GraficsScreen} options={{ headerShown: false, tabBarShowLabel: false }} />
    <Tab.Screen name="Home" 
    component={HomeScreen} options={{ headerShown: false, tabBarShowLabel: false }} />
  </Tab.Navigator>
);

export default TabNavigation;
