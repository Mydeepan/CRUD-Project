import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GiSave } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import DataContext from './dataContainer';

export const Update = () => {
    const {lists,editName,setEditName,editAge,setEditAge,editCity,setEditCity,editPhone,setEditPhone,handleEdit} = useContext(DataContext);
    const {id} = useParams('');

    const list = lists.find((item) => (item.id).toString() === id);

    useEffect(()=>{
        setEditName(list.name);
        setEditAge(list.age);
        setEditCity(list.city);
        setEditPhone(list.phone)
    },[])



  return (
    <main>
    <h1 className='h1  text-center'>Update List</h1>
    <div className="container" style={{marginTop:'5%'}}>
        <div className="row d-flex justify-content-center">
            <div className="col-md-5 border border-dark py-2 shadow p-3 mb-5 bg-body rounded">
                <form className='form-group' onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="name" className='form-label '>Name:</label>
                    <input 
                        type="text"
                        id='name'
                        required
                        className='input-group p-1'
                        value={editName} 
                        onChange={(e)=>setEditName(e.target.value)}/>
                    <label htmlFor="Age" className='form-label '>Age:</label>
                    <input 
                        type="number" 
                        id='Age'
                        required
                        className=' input-group p-1 '
                        value={editAge}
                        onChange={(e)=>setEditAge(e.target.value)}
                        placeholder='Enter your Age'
                        />
                    <label htmlFor="City" className='form-label '>City:</label>
                    <input 
                        type="text" 
                        id='City'
                        required
                        className=' input-group p-1 '
                        value={editCity}
                        onChange={(e)=>setEditCity(e.target.value)}
                        placeholder='Enter your City'
                        />
                    <label htmlFor="Phone.No" className='form-label '>Phone.No:</label>
                    <input 
                        type="tel" 
                        required
                        id='Phone.No'
                        className=' input-group p-1 '
                        value={editPhone}
                        onChange={(e)=>setEditPhone(e.target.value)}
                        placeholder='Phone number'
                        />
                     <button 
                    className='btn btn-secondary mt-4 px-5 fs-4'
                    onClick={()=>handleEdit(list.id)}
                    type='submit'><GiSave/></button>
                    <Link to={'/'}>
                        <button 
                            className='btn btn-danger mt-4 mx-2 px-2 fs-4'><MdCancel/> cancel</button>
                    </Link>
                </form>
               
            </div>
        </div>
    </div>
</main>
  )
}
