import logo from './logo.svg';
import './App.css';
import './Assets/css/sb-admin-2.min.css';
import Page1 from "./page1";
import Button from './component/button'
import Card from './component/card'
import Chart from './component/chart';
import Tables from './component/tables'
import Register from './component/register'
import Forgot from './component/forgot'
import Login from './component/login'
import SideBar from './component/sidebar';
import NavBar from './component/navbar'
import Uother from './component/uother';
import Uborder from './component/uborder';
import Ucolor from './component/ucolor';

function App() {
  return (
    <div className="App">
<Page1 />
<Button/>
<Chart/>
<Card/>
<Tables/>
<Register/>
<Forgot/>
<Login/>
<Ucolor/>
<Uborder/>

<Uother/>
<SideBar/>
<NavBar/>

    </div>
  )
    
       
  
}

export default App;
