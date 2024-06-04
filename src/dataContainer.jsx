import { createContext } from "react";
import { useEffect, useState } from 'react';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const DataContext =createContext({})


export const DataProvider =({children})=>{
     const [lists,setList] = useState([]);
    const navi= useNavigate('')
    const [postName,setPostName] = useState('')
    const [postAge,setPostAge] = useState('')
    const [postCity,setPostCity] = useState('')
    const [postphone,setPostPhone] = useState('')
    const [editName,setEditName] = useState('')
    const [editAge,setEditAge] = useState('')
    const [editCity,setEditCity] = useState('')
    const [editPhone,setEditPhone] = useState('')
    const [search,setSearch] = useState('');
    const [searchResult,setSearchResult] = useState('');
    const apliurl='http://localhost:3500/lists';
    const [error,setError] = useState(""); 
;

  

  useEffect(()=>{
    
    const fetchData =  () =>{
      try {
         axios.get(apliurl).then(res=>
          setList(res.data)
        ).catch(err=> setError(err))
      } catch (err) {
          if(err.res){
            console.log(err.res.data)
           console.log(err.res.status)
           console.log(err.res.headers)
          }else{
           console.log(err.message);
          }
          
    }
  };
    fetchData();
    searchList();
  },[lists])


    const listAdd =  (e) => {
      e.preventDefault();
      const id =Math.floor(Math.random()*2000000000000)
      const newList = {id:id,name:postName,age:postAge,city:postCity,phone:postphone}
      const add =[...lists,newList];
      try {
        axios.post(apliurl,newList).then(res =>
        setList(newList));
        setPostName('');
        setPostAge('');
        setPostCity('')
        setPostPhone('');
        navi('/')
      }catch (err) {
          if(err.res){
             console.log(err.res.data)
            console.log(err.res.status)
            console.log(err.res.headers)
          }else{
            console.log(err.message);
          }
    }finally{
            
            swal("Good job!", "Create  Successfully", "success");
            navi('/')
          }
     
    }

const handleEdit =(id) =>{
  const newData = {id,name:editName,age:editAge,city:editCity,phone:editPhone}
  axios.put(`${apliurl}/${id}`,newData)
  .then(res => console.log(res)).catch(err => err.message)
  navi('/')
  swal("Good job!", "Update Successfully", "success");
}

const handleDelete =(id) =>{
  const yes=confirm("Are you sure Delete!");
      if(yes){
        const deleteItem=lists.filter((item)=>item.id !== id);
        axios.delete(`${apliurl}/${id}`,deleteItem)
        .then(res => console.log(res.data))
        .catch(err => err.message)       
}       
}
const searchList = () => {
        const filterResult = lists.filter((item) => (
        ((item.name).toLowerCase()).includes(search.toLowerCase()) ||
        ((item.age).toString()).includes(search.toString()) ||
        ((item.city).toLowerCase()).includes(search.toLowerCase()) ||
        ((item.phone).toString()).includes(search.toString()) 
    ))
    setSearchResult(filterResult.reverse())
}
    return(
        <DataContext.Provider value={{
            error,
            searchResult,
            search,setSearch,
            setList,handleDelete,
            postName,setPostName,
            postAge,setPostAge
            ,postCity,setPostCity,
            postphone,setPostPhone,listAdd,
            lists,editName,
            setEditName,
            editAge,setEditAge,
            editCity,setEditCity,
            editPhone,setEditPhone,handleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;


