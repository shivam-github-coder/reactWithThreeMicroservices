import axios from 'axios';
import React,{useEffect, useState} from 'react'


function NewOrderData({Info}) {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchData(Info)
    }, [])

      const fetchData = async (Info) =>{
        console.log(Info)
        if((Info.name !== '') && (Info.email !== ''))
        {
          await axios.get(`http://localhost:3002/${Info.name}`)  
          .then(response => setdata(response.data));
        }
    }
    
    return (
        <div className='container my-5'>
            {data.length > 0 ? 
            <>
                { data.map(e=><>
                <div class="card mb-3 rounded-pill bg-dark text-white" >
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={e.url} alt="..." className='NewOrderImg' />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <div style={{"display":'flex'}}>
                       <h5>Name : </h5> <h5 class="card-title ml-3">{e.name}</h5>
                        </div>
                        <div style={{"display":'flex'}}>
                       <h5>Email : </h5> <p class="card-text ml-3">{e.email}</p>
                        </div>
                        <div>
                        <h3 className="card-text text-danger font-italic "><span>Rs.</span> {e.price} /-</h3>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>)}
            </>
            :
             <h3 className='text-dark text-center' style={{"border":"2px solid grey"}}>Data Not Found</h3>
            }
            

        </div>
    )
}

export default NewOrderData
