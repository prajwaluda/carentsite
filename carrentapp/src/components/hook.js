import { useState,useEffect } from "react";
import './styles/sty.css'

function Statehooker(){
    const [count,setstate]=useState(0)


    return(
        <div style={{display:'inherit',height:'200px',width:'50%',backgroundColor:'cadetblue',textAlign:'center',margin:'auto',borderRadius:'20px',boxShadow:'inherit'}}>
                <h1 >{count}</h1>
                <button style={{height:'20%',width:'30%',boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',marginLeft:'4px',marginRight:'4px'}} onClick={()=>{setstate(prevcount=> prevcount+1)}}>Increment</button>
                <button style={{height:'20%',width:'30%',boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',marginLeft:'4px',marginRight:'4px'}} onClick={()=>{setstate(prevcount=> prevcount-1)}}>Decrement</button>
                <div style={{height:'20%'}}>
                <button style={{height:'100%',width:'30%',boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',marginLeft:'4px',marginRight:'4px'}} onClick={()=>{setstate(0)}}>Reset</button>
                </div>
        </div>
        
    )
}

function Effecthooker(){
    const [posts,setposts]=useState([])
    const [originalposts,setOriginalPosts]=useState([])
    const [inputText,setInput]=useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(res=>{
            setposts(res);
            setOriginalPosts(res)
        })
        .catch(err=> {
            console.log(err)
        })
    },[])
    return(
        <div>
            <input type="text" onChange={(event)=>{setInput(event.target.value)}}/>
            <button onClick={()=>{
                let arr;
                if(inputText != ''){
                    arr=originalposts.filter(item=>item.id==Number(inputText))
                }else{
                    arr=originalposts
                }
                setposts(arr)
            }}>Submit</button>

            {posts.map((item)=>{
                return <div className="cb" key={item.id}>
                    <h4>{`${item.id} - ${item.title}`}</h4>
                    <div>{item.body}</div>
                </div>
            })}
        </div>
    )
}

export default Effecthooker;