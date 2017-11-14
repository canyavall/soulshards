//Main
import { combineReducers, createStore, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { fbConfig } from '../utils/fbConfig';
import firebase from 'firebase';

const rrfConfig = {
    userProfile: 'users',
    enableLogging: false
}

firebase.initializeApp(fbConfig)

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(
                rootReducer,
                initialState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
