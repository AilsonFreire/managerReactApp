import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyD787fIu_STxAixY289j886_b-gLYHh_4Y',
            authDomain: 'manager-91bf0.firebaseapp.com',
            databaseURL: 'https://manager-91bf0.firebaseio.com',
            projectId: 'manager-91bf0',
            storageBucket: 'manager-91bf0.appspot.com',
            messagingSenderId: '521304317057'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
               <LoginForm />
            </Provider>
        );
    }
}

export default App;

