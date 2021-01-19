import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPw_XcGzE_jzpO9wB9Z3Ey2FU2d82O5gY",
  authDomain: "my-project-7c1ed.firebaseapp.com",
  databaseURL: "https://my-project-7c1ed.firebaseio.com",
  projectId: "my-project-7c1ed",
  storageBucket: "my-project-7c1ed.appspot.com",
  messagingSenderId: "858876368970",
  appId: "1:858876368970:web:6306c86a5411900e63eeb3",
  measurementId: "G-K8R0H6R593"
};
// Add your Firebase credentials
firebase.initializeApp(firebaseConfig);

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [userUID, setUserUID] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUserUID(response.user.uid);
        setUser(getUserFromDB(response.user.uid))
        return response.user.uid;
      }).catch(error => {
        return error.code
      });
  };

  const signup = (email, password, name, nickname) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUserUID(response.user.uid);
        const newUser = {
          email,
          name,
          nickname,
          uid: response.user.uid
        }
        firebase.firestore().collection("users").doc(response.user.uid).set(newUser).then(() => {
          setUser(getUserFromDB(response.user.uid))
        });
        return response.user.uid;
      })
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUserUID(null);
        setUser(null)
      });
  };

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      setUserUID(currentUser.uid);
    } else {
      setUserUID(null);
      setUser(null)
    }
  }, [userUID])

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUserUID(currentUser.uid);
        setUser(await getUserFromDB(currentUser.uid))
      } else {
        setUserUID(null);
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    userUID,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}



function getUserFromDB(uid) {
  return firebase.firestore().collection("users").doc(uid).get().then(function (doc) {
    if (doc.exists) {
      console.log('user data', doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

}