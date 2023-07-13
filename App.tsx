import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MENU_ICON, NAVIGATION_COLOR, WHITE_COLOR } from './consts';
import TabNavigation from './src/component/TabNavigation';

const Stack = createStackNavigator();

const App: FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: NAVIGATION_COLOR },
        headerTintColor: WHITE_COLOR,
      }}
    >
      <Stack.Screen
        name="Mob4Pay"
        component={TabNavigation}
        options={{
          title: "Mob4Pay",
          headerLeft: () => (
            <View>
              <Ionicons name={MENU_ICON} size={24} color={WHITE_COLOR} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);


export default App;
