
import './App.css';
import React,{ useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import { Payment } from '@mui/icons-material';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe (
  'pk_test_51KYJ0pKDV8wz1xhsN5AiRB2oQ7HdhqnmHpyovGLqwZYd0vuhN52EVRAs1K8zgLZ9fAaYHtKjqG15tMnijwpqHVYz002kRGdelE'
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
 
  <Routes>
  
    <Route path="/" element={<><Header /><Home /></>}/>
    <Route path="/orders" element={<><Header /><Orders /></> } />
    <Route path="/checkout" element={<><Header /><Checkout /></>}/>
    <Route path="/login" element={<Login />} />
    
    <Route path="/payment" element={<>
    <Header/> 
      <Elements stripe={promise}>
        <Payment />
      </Elements> </>
    }
    />
  
        {/* <Header/>
        <Home/>
        <Checkout/> */}
     
  </Routes>

  </div>
  </Router>
  );
}

export default App;
