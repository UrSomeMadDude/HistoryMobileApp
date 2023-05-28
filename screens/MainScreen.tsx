import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SecondScreen from './SecondScreen'
import HistoryScreen from './HistoryScreen/HistoryScreen'
import { useNavigation } from '@react-navigation/native'
import VictorinsScreen from './Victorins/VictorinsScreen'
import { StatusBar } from 'react-native'
import GamesScreen from './GamesScreen/GamesScreen'

const MainScreen = () => {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#E6D5EE"
        barStyle="dark-content"
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case 'History': {
                iconName = focused ? 'book' : 'book-outline'
                break
              }
              case 'Victorins': {
                iconName = focused ? 'medal' : 'medal-outline'
                break
              }
              case 'Games': {
                iconName = focused
                  ? 'game-controller'
                  : 'game-controller-outline'
                break
              }
              case 'Tourism': {
                iconName = focused ? 'map' : 'map-outline'
                break
              }
              default: {
                break
              }
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
          tabBarActiveTintColor: '#40005E',
          tabBarInactiveTintColor: '#40005E',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="History"
          options={{
            tabBarLabel: 'История',
          }}
          component={HistoryScreen}
        />
        <Tab.Screen
          name="Victorins"
          options={{
            tabBarLabel: 'Викторины',
          }}
          component={VictorinsScreen}
        />
        <Tab.Screen
          name="Games"
          options={{
            tabBarLabel: 'Игры',
          }}
          component={GamesScreen}
        />
        <Tab.Screen
          name="Tourism"
          options={{
            tabBarLabel: 'Студтуризм',
          }}
          component={SecondScreen}
        />
      </Tab.Navigator>
    </>
  )
}

export default MainScreen
