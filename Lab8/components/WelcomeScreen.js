import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Zimbabwe', code: 'ZW' },
];

const Country = ({ name, code }) => (
  <View style={styles.countryItem}>
    <Text style={styles.countryText}>{name}</Text>
    <Text style={styles.countryCodeText}>{code}</Text>
  </View>
);

const WelcomeScreen = () => {
  const renderItem = ({ item }) => <Country name={item.name} code={item.code} />;

  return (
    <FlatList
      data={countries}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  countryText: {
    fontSize: 30,
    color: '#e83059',
  },
  countryCodeText: {
    fontSize: 25,
    color: '#e83059',
  },
});

export default WelcomeScreen;
