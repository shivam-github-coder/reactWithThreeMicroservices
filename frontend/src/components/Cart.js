import React from 'react'
import {data} from '../components/data'

function Cart({setInfo,Info}) {

    const BuyIT = (e) =>{
        setInfo({...Info,order:e.name,price:e.price,url:e.url})
      }

    return (
        <div className='container-fluid'>
        <div className='row mx-auto'>
        {
        data.map((e,i)=> 
        
          <div key={i} className="card mx-5 my-5">
          <img src={e.url} className="card-img-top imgDemo" alt="..." />
          <div className="card-body">
            <h1 className="card-title text-center">{e.name}</h1>
            <h3 className="card-text text-danger font-italic text-center"><span>Rs.</span> {e.price} /-</h3>
            <div className=' d-flex justify-content-center '>
                <button disabled={Info.name ? false : true} onClick={() => BuyIT(e)} className="btn btn-block btn-primary">Buy NOW!!!</button>
            </div>
          </div>
        </div>
        
        )
      }
        </div>
    </div>
    )
}

export default Cart
