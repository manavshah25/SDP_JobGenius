import{Route,Routes,Navigate,BrowserRouter} from 'react-router-dom';
import './App.css';
import Homeone from "./Component/Homeone";
import Hometwo from "./Component/Hometwo";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Jobpost from "./Component/Jobpost"
import Joblist from "./Component/Joblist"
import Employeeprofile from "./Component/Employeeprofile"
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homeone/>} />
        <Route  path="/themetwo" element={<Hometwo/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/postjob" element={<Jobpost/>}/>
        <Route path='/joblist' element={<Joblist/>}/>
        <Route path='/employeeprofile' element={<Employeeprofile/>}/>
        {/* <Route  path="/detail" element={<Listinfo/>} />
        <Route  path="/Creditfrom" element={<Form/>} />
        <Route path="/" exact element={<Navigate replace to="/login"/>}/> */}
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
