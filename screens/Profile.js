import React, { useState } from "react";
import { Container, Navbar, Row, Col } from "react-native-bootstrap";
import AddProfile from "./AddProfile";
import { doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { sendEmailVerification, getAuth, onAuthStateChanged } from 'firebase/auth'
import { View } from "react-native";


function Profile() {
  const [profileId, setProfileId] = useState("");

  const getProfileIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setProfileId(id);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.budgetFormContainer}>
          <AddBudget id={budgetId} setBudgetId={setBudgetId} />
        </View>
      </View>
    </>
  );
}

export default Profile;
