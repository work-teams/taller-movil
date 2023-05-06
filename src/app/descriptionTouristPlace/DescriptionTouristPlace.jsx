import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
const DescriptionTouristPlace = ({navigation, route})=>{
  const onBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={route.params.title} onBack={onBack}></Header>
      <ScrollView style={styles.description}>
        <Text>Hola2</Text>
      </ScrollView>
    </View>
  );
};

export default DescriptionTouristPlace;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  description: {
    paddingVertical: 10,
    paddingHorizontal: 20,

  }

});

