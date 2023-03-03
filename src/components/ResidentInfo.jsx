import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';


const ResidentInfo = ({resident}) => {
    // console.log(resident);

const [re, setres] = useState({})

useEffect(()=>{
axios.get(resident)
.then(res => setres(res.data))


},[resident])

    return (
        <div className='col-12 col-sm-6 col-lg-4 col-xl-3'>
          <div className="card  bg-card d-block m-auto mb-4 shadow-lg " style={{ width: '18rem', height: '32rem' }}>
            <img src={re.image }className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">{re.name }</h5>
              <hr className='mt-1 mb-2' />
              <p className="card-text"> <b>Raza: </b> {re.species }</p>
              <p className="card-text"> <b>Origin: </b> {re.origin?.name}</p>
              <p className="card-text"> <b>Episodes where appear: </b> {re.episode?.length}</p>
              {
                re.status==='Alive'?
                <p className='badge bg-secondary status'><i className="fa-solid fa-circle green"></i> Con vida</p>
                : re.status==='Dead'?
                <p className='badge bg-secondary status'><i className="fa-solid fa-circle red"></i> Muerto</p>
                :
                <p className='badge bg-secondary status'><i className="fa-solid fa-circle uk"></i> Desconocido</p>
              }

             
            </div>
          </div>
        </div>
    );
};

export default ResidentInfo;