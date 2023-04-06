
import './App.css';
import Homeone from "./Component/Homeone";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import{Route,Routes,Navigate,BrowserRouter} from 'react-router-dom';
import Jobpost from "./Component/Jobpost"
import Joblist from "./Component/Joblist"
import Employeeprofile from "./Component/Employeeprofile"
import Personaldetail from './Component/Resume/Personaldetail';
import Education from './Component/Resume/Education';
import Experience from './Component/Resume/Experience';
import Skill from './Component/Resume/Skill';
import Resume from './Component/Resume/Resume';
import Jobdetails from './Component/Jobdetails';
import Companyuser from './Component/Companyuser';
import Admin from './Component/Admin'
import PageNotFound from './Component/PageNotFound';
import Contact from './Component/Contact/contact';
function App() {
  const user=JSON.parse(localStorage.getItem("userbool"));
  const employee=JSON.parse(localStorage.getItem("employeebool"));
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homeone/>} />
      
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
       <Route  path="/jobdetails" element={<Jobdetails/>}/> 
      {!employee && <Route path="/postjob" exact element={<Navigate replace to="/login"/>}/>}
       <Route  path="/postjob" element={<Jobpost/>}/> 
       {/* {!employee && <Route path="/adminpanel" exact element={<Navigate replace to="/login"/>}/>} */}
       <Route  path="/adminpanel" element={<Admin />}/> 
       <Route  path="/verfiycompany" element={<Companyuser />}/> 

        <Route path='/joblist' exact  element={<Joblist/>}/> 
        {/* <Route path="/joblist" exact element={<Navigate replace to="/login"/>}/> */}
        <Route path='/employeeprofile' element={<Employeeprofile/>}/>
        <Route path='/personaldetail' element={<Personaldetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
