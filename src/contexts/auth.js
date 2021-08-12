import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInAuth, signUpAuth, signOutAuth } from '../services/firebase/firebaseAuth'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);

      console.log(storageUser)
    }

    loadStorage();

  }, []);

  // signIn
  async function signIn(email, password) {
    setLoadingAuth(true)
    setLoading(true)

    const data = await signInAuth(email, password)

    if(!data) {
      setLoadingAuth(false);
      return;
    } else {
      setUser(data);
      setLoadingAuth(false);
      setLoading(false)
      storageUser(data)
    }
  }

  // signUp
  async function signUp(email, password, name) {
    setLoadingAuth(true)

    let data = await signUpAuth(email, password, name)

    if(!data) {
      setLoadingAuth(false);
      return;
    } else {
      setUser(data);
      setLoadingAuth(false);
    }
    
  }

  // storageUser
  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  // signOut
  async function signOut() {
    signOutAuth()
    setUser(null)
    setLoadingAuth(false);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;