import * as React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <WelcomeScreen />
      <Footer />
    </View>
  );
}