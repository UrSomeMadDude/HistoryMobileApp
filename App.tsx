import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import globalStyles from './globalStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegistrationScreen from './screens/RegistartionScreen/RegistrationScreen'
import HistoryLessonScreen from './screens/HistoryLessonScreen/HistoryLessonScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const getFonts = () =>
    Font.loadAsync({
      'commissioner-regular': require('./assets/fonts/Commissioner-Regular.ttf'),
      'commissioner-bold': require('./assets/fonts/Commissioner-Bold.ttf'),
    }).then(() => setFontsLoaded(true))

  useEffect(() => {
    getFonts()
  }, [])

  if (fontsLoaded) {
    return (
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Register"
              component={RegistrationScreen}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
            />
            <Stack.Screen
              name="HistoryLesson"
              component={HistoryLessonScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <Text>Загрузка...</Text>
      </SafeAreaView>
    )
  }
}
