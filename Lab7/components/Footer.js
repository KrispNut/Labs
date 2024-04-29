import * as React from 'react';
import { View, Text } from 'react-native';
export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <Text
        style={{
          fontSize: 40,
          color: 'yellow',
          textAlign: 'center',
        }}>
        No rights reserved
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: 'yellow',
          textAlign: 'center',
        }}>
        Piracy Rules
      </Text>
    </View>
  );
}
