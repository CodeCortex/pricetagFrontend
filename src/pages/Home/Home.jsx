// import React,{useEffect, useState} from 'react'
import Hero from '../../components/layout/Hero';


const Home = () => {
    // const [data, setData]= useState("");

    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         const data1= await fetch("http://localhost:8080/api/v1");
    //         const data= data1.json();
    //         setData(data);
    //     }
    //     fetchData();
    // },[])
    


  return (
    <div>
        {/* <h1>{data}</h1> */}
        <Hero/>
        
      
    </div>
  )
}

export default Home
