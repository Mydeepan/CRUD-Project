import React, { createContext, useContext, useState } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BiAddToQueue } from "react-icons/bi";
import { FaRegEdit,FaTrashRestore } from "react-icons/fa";
import DataContext from './dataContainer';



export const Home = () => {
    const {lists,searchResult,handleDelete,search,setSearch}=useContext(DataContext);
  return (
    <main>
     <h1 className='h1  text-center position-sticky sticky-top' style={{ fontSize:'3.5rem', color:'#353b48'}}>CRUD APP</h1>
      <div className="container ">
       <Link to={'/feed'}>
             <button className='btn btn-success px-3 mb-3'  style={{marginLeft:"75%"}}> <i ><BiAddToQueue /></i> &nbsp;Add</button>
        </Link>
        {lists.length ?<div className="row d-flex justify-content-center">
          <div className="col-md-8">
          <input 
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            placeholder='Search here'
            className='mb-3'/>
            <table className='table table-bordered table-hover table-striped border-secondary text-capitalize responsive'>
              <thead >
                <tr >
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Phone.No</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
               {searchResult.map((list) => (
                <tr key={list.id}>
                    <td>{list.name}</td>
                    <td>{list.age}</td>
                    <td>{list.city}</td>
                    <td>{list.phone}</td>
                    <td className='btn-warning'>
                        <Link to={`/update/${list.id}`}>
                          <button className="btn  "><i><FaRegEdit /></i>
                          &nbsp;Edit</button>
                        </Link>
                    </td>
                    <td className=' btn-danger'>
                        
                        <button className="btn" onClick={()=>handleDelete(list.id)}>
                          <i><FaTrashRestore /></i>&nbsp;
                          Delete</button>
                    </td>
                </tr>
               ))}
              </tbody>
            </table>
          </div>
        </div>:
        <div className='h2 w-100 h-100 d-flex justify-content-center align-items-center flex-column zoom-in'> 
          <p >Opps! Your Lists is Empty</p>
          <p>Data not found</p>
          </div>}
      </div>
    </main>
  )
}
