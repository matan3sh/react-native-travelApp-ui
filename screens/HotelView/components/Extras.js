import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gs, colors } from '../../../styles';

const Extras = () => {
  const extras = [
    'Payment at Checkout',
    'WI-FI Network is off by 12:00pm',
    'No swimming after 10:00pm',
    'No more then 2 bags of luggage',
    'No signing while showering',
    'No Refunds'
  ];

  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Before you go</Text>
      <View style={styles.list}>
        {extras.map((extra, index) => {
          return (
            <Text style={styles.listItem} key={index}>
              &mdash; {extra}
            </Text>
          );
        })}
      </View>

      <View style={{ marginTop: 32, marginBottom: -40 }}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ fontWeight: '700', color: '#fff' }}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Extras;

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64
  },
  list: {
    marginTop: 16,
    marginLeft: 8
  },
  listItem: {
    color: colors.textSec,
    marginVertical: 8
  },
  filterButton: {
    ...gs.button,
    paddingVertical: 16
  }
});
