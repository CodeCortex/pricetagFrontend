import axios from "axios";

const API= axios.create({
    baseURL:"http://localhost:8080/api/v1",
    withCredentials:true
});


export const registerAgent=(data)=>{
    API.post("/agents/register", data);
}

export const loginUser =(data)=>{
    API.post("/agents/login", data);
}

export const loginAuth= (data)=>{
    return API.post("/auth/login", data);
}