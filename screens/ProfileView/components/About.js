import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gs, colors } from '../../../styles';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>About Me</Text>
      <Text style={styles.about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod
        quia? Hic labore, quo inventore, eos accusantium minus aliquam qui sed,
        dicta recusandae modi quis? Inventore omnis recusandae temporibus dolor.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    margin: 32
  },
  about: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22
  }
});
