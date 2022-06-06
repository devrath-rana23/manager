import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';
import {initializeApp} from 'firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    const firebaseConfig = {
      apiKey: 'AIzaSyAoyrPcV6BX2dWvd5KI3damV-4-5Z_27uM',
      authDomain: 'manager-ba23e.firebaseapp.com',
      projectId: 'manager-ba23e',
      storageBucket: 'manager-ba23e.appspot.com',
      messagingSenderId: '988368194321',
      appId: '1:988368194321:web:64b428a82a0f4e6c43dab0',
      measurementId: 'G-EGVSY9P55N',
    };

    const app = initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
