import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from './styles';
import HotelView from './screens/HotelView';
import ProfileView from './screens/ProfileView';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HotelView />
      {/* <ProfileView /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
