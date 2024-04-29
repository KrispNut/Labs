import * as React from 'react';
import { View, Text } from 'react-native';
export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: 'gray',
      }}>
      <Text
        style={{
          fontSize: 40,
          color: '#e83059',
          textAlign: 'center',
        }}>
        No rights reserved
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: '#e83059',
          textAlign: 'center',
        }}>
        Piracy Rules
      </Text>
    </View>
  );
}
