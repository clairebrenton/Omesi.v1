import { FirebaseError } from "@firebase/util";
import React, { useState, useEffect } from "react";
import ProfileDataService from "./profile.services";
import { db, auth } from '../firebase';
import { View, Text, Button, TextInput, Alert } from "react-native";

const AddProfile = ({ id, setProfileId }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("")
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || amount === "" || date === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newProfile = {
      name,
      amount,
      date,
      userId: auth.currentUser.uid,
    };
    console.log(newProfile);

    try {
      if (id !== undefined && id !== "") {
        await ProfileDataService.updateProfile(id, newProfile);
        setProfileId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ProfileDataService.addProfile(newProfile);
        setMessage({ error: false, msg: "New Profile added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setAmount("");
    setDate("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ProfileDataService.getProfile(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setAmount(docSnap.data().amount);
      setDate(docSnap.data().date)
      
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <View style={{ padding: 16 }}>
        {/*
      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}
        */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Profile
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        Enter information about you below.
      </Text>

      <TextInput
        style={{flexDirection: 'row', alignItems: 'center', padding: 8, marginBottom: 8 }}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={{flexDirection: 'row', alignItems: 'center', padding: 8, marginBottom: 8 }}
        placeholder="Age"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <TextInput
        style={{ flexDirection: 'row', alignItems: 'center', padding: 8, marginBottom: 16 }}
        placeholder="Doctor Email"
        value={date}
        onChangeText={(text) => setDate(text)}
      />

      <Button
        title="Add/Update"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddProfile;
