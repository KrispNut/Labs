import * as React from 'react';
import { View, Text } from 'react-native';
export default function Header() {
  return (
    <View style={{ flex: 0.2, backgroundColor: 'gray' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#e83059',
          textAlign: 'center',
        }}
        numberOfLines={3}>
        December
        <Text style={{ fontWeight: 'bold' }}> 12</Text>{' '}
      </Text>
    </View>
  );
}
