import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'; //ReduxThunk is actualy a middleware
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));//second argument is initial state we want to pass to our application
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
