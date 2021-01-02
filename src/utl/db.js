import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({ databaseURL: "https://mini-miro-28f08.firebaseio.com/" })
  .database();
