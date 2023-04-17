import { db, auth } from '../firebase';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
} from "firebase/firestore";


const profileCollectionRef = collection(db, "profiles");
class ProfileDataService {
  addProfile = (newProfile) => {
    return addDoc(profileCollectionRef, newProfile);
  };

  updateProfile = (id, updatedProfile) => {
    const profileDoc = doc(db, "profiles", id);
    return updateDoc(profileDoc, updatedProfile);
  };

  deleteProfile = (id) => {
    const profileDoc = doc(db, "profiles", id);
    return deleteDoc(profileDoc);
  };

  getAllProfile = () => {
    return getDocs(profileCollectionRef);
  };

  getProfile = (id) => {
    const profileDoc = doc(db, "profiles", id);
    return getDoc(profileDoc);
  };
  getProfiles = (id) => {
    return

  }
}

export default new ProfileDataService();