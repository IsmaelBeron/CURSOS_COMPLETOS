import React from 'react'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { SafeAreaView, StatusBar } from 'react-native'
import { styles } from './src/themes/AppTheme'



const App = () => {
  return ( 

    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor= "black"
        barStyle="light-content"
        />
        <CalculadoraScreen />
    </SafeAreaView>

  )
}

export default App