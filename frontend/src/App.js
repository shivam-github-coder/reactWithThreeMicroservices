import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import NewOrderData from './components/NewOrderData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const axios = require('axios');
function App() {
  const [Info, setInfo] = useState({
    name:'',
    email:'',
    order:'',
    price:0,
    url:''
  })

  

  useEffect(async() => {
    console.log(Info)
    if(Info.name !== '' && Info.email !== '')
    {
      CreateDBUser(Info)
      // await axios.get(`http://localhost:3002/${Info.name}`)  
      // .then(response => setdata(response.data));
    }
  }, [Info])

  const CreateDBUser =async (datas) => {
    console.log("my",datas)
    await axios.post('http://localhost:3005/user', datas)
    .then(response =>  response.data.id);

    
  }


  return (
    <Router>
    <div className="App">
      <Header setInfo={setInfo} Info={Info}  />
    
      <Switch>
          <Route path="/NewOrderData">
            <NewOrderData Info={Info} />
          </Route>
          <Route path="/">
            <Cart setInfo={setInfo} Info={Info} />
          </Route>
        </Switch>

        


    </div>

    </Router>
  );
}

export default App;
