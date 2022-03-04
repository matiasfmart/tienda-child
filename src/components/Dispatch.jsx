import React from 'react';

function Dispatch(){

  return (
    <div className='container dispatch-container display-flex'>
        <div className='row justify-content-around'>
            <div className='col-md-2'>
                <div>
                    <h5 className='text-center'>Envios por motomensajeria</h5>
                </div>
                <div className='dispatchImg'>
                    <img src="/img/motoDelivery.png" className='img-thumbnail'/>
                </div>
            </div>
            <div className='col-md-2'>
                <div>
                    <h5 className='text-center'>Todos los medios de pago</h5>
                </div>
                <div className='dispatchImg'>
                    <img src="/img/payMethods.png" className='img-thumbnail'/>
                </div>
            </div>
            <div className='col-md-2'>
                <div>
                    <h5 className='text-center'>Envios a todo el pais por Correo Argentino</h5>
                </div>
                <div className='dispatchImg'>
                    <img src="/img/correoArgentino.png" className='img-thumbnail'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Dispatch;