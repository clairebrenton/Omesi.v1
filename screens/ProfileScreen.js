  /*
  const handleSignOut = () => {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };
*/

/*
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { getAuth } from "firebase/auth";
import NavBar from '../components/NavBar';


export default function ProfileScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
              onPress={() => navigation.navigate('Profile')}
              style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
              <NavBar navigation={navigation} />
      </View>
  );
}
*/
/*
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setUserId(user.uid);
      getProfileData(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setAge(userData.age);
      setGender(userData.gender);
      setDoctorEmail(userData.doctorEmail);
    }
  }, [userData]);

  const getProfileData = async (userId) => {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      setUserData(userDoc.data());
    }
  }

  const saveProfile = async () => {
    if (userData) {
      await updateDoc(doc(db, 'users', userId), {
        name,
        age,
        gender,
        doctorEmail,
      });
      setUserData({
        name,
        age,
        gender,
        doctorEmail,
      });
    } else {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        age,
        gender,
        doctorEmail,
        userId,
      });
      setUserData({
        name,
        age,
        gender,
        doctorEmail,
        id: docRef.id,
      });
    }
  }

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        onChangeText={setName}
        value={name}
      />
      <Text>Age:</Text>
      <TextInput
        onChangeText={setAge}
        value={age}
      />
      <Text>Gender:</Text>
      <TextInput
        onChangeText={setGender}
        value={gender}
      />
      <Text>Doctor Email:</Text>
      <TextInput
        onChangeText={setDoctorEmail}
        value={doctorEmail}
      />
      <Button
        title="Save"
        onPress={saveProfile}
      />
    </View>
  );
}

export default ProfilePage;
*/
import React, { useState } from "react";
import AddProfile from "./AddProfile";
import { doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { sendEmailVerification, getAuth, onAuthStateChanged } from 'firebase/auth'
import { View } from "react-native";
import NavBar from '../components/NavBar';


function ProfileScreen() {
  const [profileId, setProfileId] = useState("");

  const getProfileIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setProfileId(id);
  };
  return (
    <>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
          <AddProfile id={profileId} setProfileId={setProfileId} />
      </View>
    </>
  );
}

export default ProfileScreen;
