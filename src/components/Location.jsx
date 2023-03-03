import React from 'react';

const Location = ({location}) => {
    return (
        <div className='bg-inf mt-4 mb-4'>
            <div className='row'>
                <div className='col'>
                    <p className='text-center text-light pt-3 fs-3 ts'>{location.name}</p>
                </div>
            </div>

            <div className='row text-light pt-2 pb-3 text-center'>
                <div className='col-12 col-sm-4'>
                    <p className='ts'><b> Type:</b> {location.type}</p>
                </div>
                <div className='col-12 col-sm-4'>
                    <p className='ts'> <b> Dimension: </b> {location.dimension}</p>
                </div>
                <div className='col-12 col-sm-4'>
                    <p className='ts'><b>Population: </b>  {location.residents?.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Location;