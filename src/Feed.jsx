import React, { useContext } from 'react'
import DataContext from './dataContainer'
import { GiSave } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

export const Feed = () => {
    const {postName,setPostName,postAge,setPostAge,postCity,setPostCity,postphone,setPostPhone,listAdd} = useContext(DataContext)
  return (
    <main>
        <h1 className='text-center'>Create List</h1>
        <div className="container " style={{marginTop:'5%'}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 border border-dark py-2 shadow p-3 mb-5 bg-body rounded">
                    
                    <button className='btn fs-3 text-danger '  style={{marginLeft:'90%'}}><MdCancel /></button>
                    
                    <form className='form-group ' onSubmit={(e)=>listAdd(e)}>
                        <label htmlFor="name" className='form-label h4'>Name:</label>
                        <input 
                            type="text" 
                            id='name'
                            required
                            className=' input-group p-1 '
                            value={postName}
                            onChange={(e)=>setPostName(e.target.value)}
                            placeholder='Enter The Name'
                            />
                        <label htmlFor="Age" className='form-label h4 mt-2 '>Age:</label>
                        <input 
                            type="number" 
                            id='Age'
                            required
                            className=' input-group p-1 '
                            value={postAge}
                            onChange={(e)=>setPostAge(e.target.value)}
                            placeholder='Enter your Age'
                            />
                        <label htmlFor="City" className='form-label h4 mt-2'>City:</label>
                        <input 
                            type="text" 
                            required
                            id='City'
                            className=' input-group p-1 '
                            value={postCity}
                            onChange={(e)=>setPostCity(e.target.value)}
                            placeholder='Enter your City'
                            />
                        <label htmlFor="Phone.No" className='form-label h4 mt-2'>Phone.No:</label>
                        <input 
                            type="tel" 
                            required
                            id='Phone.No'
                            className=' input-group p-1 '
                            value={postphone}
                            onChange={(e)=>setPostPhone(e.target.value)}
                            placeholder='Phone number'
                            />
                        <button   className='btn btn-outline-success mt-4 px-5 fs-4'><GiSave /></button>
                        
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
