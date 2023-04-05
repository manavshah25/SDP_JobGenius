import React, { useEffect ,useState } from 'react'
import './Admin.css';
import './javascript'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Index() {
    const [post, setPost] = useState({
        g: []
      });
const emop=localStorage.getItem('employee')
const nav=useNavigate()
function handleClick(id)
{
  localStorage.setItem("cuserid",id);
  nav("/verfiycompany")

}
    useEffect(() => {
      axios.post("http://localhost:8000/data",{
        emop

      }).then(
          (res) => {
            setTimeout(() => {
              setPost({ g: res.data });
            });
           console.log("sucess")
          },
          (error) => {
            console.log("error in fetching");
          }
        );
      },[]);
      console.log(post)
  return (
  
    <div>
       
  
    {post.g.map((add,i)=>(

<div key={i} class="cont">
    <article onClick={()=>handleClick(add._id)}>
    <figure>
        <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </figure>
 <h2>{add.title}</h2>


    <div>
        <p>{add.salary}{add.jobtype}{add.category}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?
        </p>
      
      <div style={{display:"flex",marginBottom:"-10%"}}> 
       <strong>Deadline&nbsp;</strong> :<h1 style={{marginTop:"4%",}}>&nbsp;{add.deadlineDate.slice(0,15)}
        </h1>
        </div>
        <div style={{display:"flex"}}> 
          <strong>Posted &nbsp;</strong> : <h1 style={{marginTop:"4%"}}>&nbsp;{add.postedDate.slice(0,15)}
        </h1>
        </div>
        <strong style={{marginLeft:"-5%"}}>{add.companyname}</strong>
          </div>
</article>
</div>))}

</div>
    
   
  )
}

export default Index