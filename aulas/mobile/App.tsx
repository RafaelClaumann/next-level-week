import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Text>Hello World</Text>
    </View>
  );
}