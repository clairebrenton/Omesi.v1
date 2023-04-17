import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DataEntryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Data Entry Screen</Text>
        </View>
    );
}