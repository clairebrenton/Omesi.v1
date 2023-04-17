/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';


export default function MarkersScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Markers Screen</Text>
                <NavBar navigation={navigation} />
        </View>
    );
}
*/
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Slider, Button, StyleSheet } from 'react-native';

const MarkersPage = () => {
  const [feeling, setFeeling] = useState('');
  const [tookMeds, setTookMeds] = useState(false);
  const [mood, setMood] = useState(5);

  const handleFeelingChange = (text) => {
    setFeeling(text);
  };

  const handleMedsChange = (value) => {
    setTookMeds(value);
  };

  const handleMoodChange = (value) => {
    setMood(value);
  };

  const handleSubmit = () => {
    // Do something with the data, e.g. send it to a server or save to local storage
    console.log({ feeling, tookMeds, mood });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>How are you feeling today?</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleFeelingChange}
        value={feeling}
        placeholder="Enter your response here"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Did you take your meds today?</Text>
        <Switch
          value={tookMeds}
          onValueChange={handleMedsChange}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Rate your mood:</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={mood}
          onValueChange={handleMoodChange}
        />
        <Text style={styles.value}>{mood}</Text>
      </View>

      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  value: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MarkersPage;
