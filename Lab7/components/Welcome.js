import * as React from 'react';
import { View, Text } from 'react-native';
export default function WelcomeScreen() {
  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: '#ea3059',
      }}>
      <Text
        style={{
          padding: 40,
          fontSize: 40,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        The 346th day of the year (347th in leap years) in the Gregorian
        calendar
      </Text>
      <Text
        style={{
          fontSize: 40,
          padding: 20,
          marginVertical: 8,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        19 days remain until the end of the year
      </Text>
    </View>
  );
}
