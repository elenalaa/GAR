import React from 'react';
import {AuthProvider} from './contexts/AuthContext';
import Navigator from './navigators/Navigator';
import firebaseConfig from './firebase/config';
import {firebase} from '@firebase/app';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App = () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}


export default App;