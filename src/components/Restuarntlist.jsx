import React,{useEffect} from 'react'
import Restaurantfinder from '../apis/Restaurantsfinder'
function Restuarntlist() {
    useEffect(()=>{
        try{
              Restaurantfinder.get("/")
        }catch (err){

        }
    },[])
    return (
        <div className='list-group'>
            <table className='table table-hoer table-dark'>
                <thead>
                    <tr className='bg-primary'>
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>location</th>
                        <th scope='col'>price range</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>edit</th>
                        <th scope='col'>delete</th>
                        </tr>   
                </thead>
                <tbody>
                    <tr>
                        <td>macdonald</td>
                        <td>newyork</td>
                        <td>$$</td>
                        <td>Ratings</td>
                        <td><button className='btn btn-warning'>UPDATE</button></td>
                        <td><button className='btn btn-danger'>DELETE</button></td>
                    </tr>
                    <tr>
                        <td>macdonald</td>
                        <td>newyork</td>
                        <td>$$</td>
                        <td>Ratings</td>
                        <td><button className='btn btn-warning'>UPDATE</button></td>
                        <td><button className='btn btn-danger'>DELETE</button></td>
                    </tr>
                    <tr>
                        <td>macdonald</td>
                        <td>newyork</td>
                        <td>$$</td>
                        <td>Ratings</td>
                        <td><button className='btn btn-warning'>UPDATE</button></td>
                        <td><button className='btn btn-danger'>DELETE</button></td>
                    </tr>
                </tbody>

            </table>
            
        </div>
    )
}

export default Restuarntlist
