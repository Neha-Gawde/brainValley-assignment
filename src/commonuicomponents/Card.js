import React, { useState } from 'react';
import DetailsModal from './Modal';

  
function Card(props) {
    const { data }=props;
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({})
    const onCardClick = (name, region, maps) => {
       setOpen(true)
       setModalData({
           "name":name,
           "region":region,
           "maps":maps
       })
    };
    const onClose = () => {
        setOpen(false)
    }
    console.log(modalData)
    //const dataToshow = paginatrionData(noOfCountries, data);
  
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 country-div">
                {data.length > 0 &&
                    data.map((el,i)=>(
                        <div className="col justify-content-center d-flex mb-3" key={i}>
                            <div className="card" onClick={()=>{onCardClick(el.name.official, el.region, el.maps)}}>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img src={el.coatOfArms.png ? el.coatOfArms.png : el.coatOfArms.svg} className="card-image" />
                                        </div>
                                        <div className='col-8 align-items-center'>
                                            <div className='col'>
                                                <h5 className="card-title">{el.name.official ? el.name.official : el.name.common}</h5>
                                            </div>
                                            <div className='col'>
                                                <h6 className="card-subtitle mb-2 text-muted">{el.capital}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row align-items-flex-start'>
                                        <div className='col-12'>
                                            <h3 className='text-muted'>Population</h3>
                                        </div>
                                        <div className='col-12'>
                                            <span>{el.population}</span>
                                        </div>
                                    </div>
                                    
                                        {/* <div className='row aling-items-center'>
                                            <div className='col'>
                                                <h6 className="card-subtitle mb-2 text-muted">Capital :</h6>
                                            </div>
                                            <div className='col'>
                                                <h6 className="card-subtitle mb-2 text-muted">{el.capital}</h6>
                                            </div>
                                        </div>
                                        <div className='row aling-items-center'>
                                            <div className='col'>
                                                <h6 className="card-subtitle mb-2 text-muted">Region :</h6>
                                            </div>
                                            <div className='col'>
                                                <h6 className="card-subtitle mb-2 text-muted">{el.region}</h6>
                                            </div>
                                        </div> */}
                                    {/* <ul>
                                        <li>
                                            <a href={el.maps.googleMaps} className="" >See on Google Maps</a>
                                        </li>
                                        <li>
                                            <a href={el.maps.openStreetMaps} className="" >See on Open Street Maps</a>
                                        </li>
                                    </ul>  */}
                                </div>
                            </div>
                        </div>
                    ))
                
                }
            </div>
            <DetailsModal
                open={open}
                onClose={onClose}
                modalData={modalData}
            />
        </div>
    )
}

export default Card
