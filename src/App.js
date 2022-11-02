// import './App.css';
import SignIn from './pages/SignIn';
import { Provider } from 'react-redux';
import CountryCodeReducer from './redux/CountryCode';
import { combineReducers, createStore } from 'redux'

function App() {

  const rootReducer = combineReducers({
    CountryCodeReducer,
  })

  return (
    <Provider store={createStore(rootReducer)}>
      <SignIn />
    </Provider>
  );
}

export default App;
