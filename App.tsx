import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes'
import { BackgroundLinear } from './src/components/BackgroundLinear'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <BackgroundLinear>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </BackgroundLinear>
  );
}
