import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import './HostedSpots.css';
import './MyHostedSpots.css';
import EditSpotModal from './EditSpotModal'
import {Modal} from './../../context/Modal.js'
import { set } from 'js-cookie';

function MyHostedSpots(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const spots = useSelector(state => state.spots)

    const [ showModal, setShowModal ] = useState(false)
    const [ spotId, setSpotId ] = useState(null)

    const editOneSpot = (spotId) => {
        setSpotId(spotId)
        setShowModal(true)
    }
    
    return(
        <div className='host-spot-cards'>
        {spots.map((spot) => (     
            <div className="host-spot-card" key={spot.id}>
                <Link to={`/spots/${spot.id}`}>
                    <div className="host-spot-card-img-section hover-hand">
                        <img src={spot.photo1} alt="boat" />
                    </div>
                </Link>
                <div className="hsc-content-container">
                    <div className="hsc-content-section">
                        <p className="hsc-ship-name"><a href={`/spots/${spot.id}`}>{spot.name}</a></p>
                        <div className="hsc-check-section-container">
                            <div className="hsc-check-section">
                                <p>{spot.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='edit-spot-btn cancel-btn hover-hand' onClick={() => editOneSpot(spot.id)}>Edit</button>
            </div>
        ))}
        {showModal &&
            <Modal className="modal" onClose={() => setShowModal(false)}>
                <EditSpotModal show={showModal}
                    onClose={() => setShowModal(false)}
                    spotId={spotId} />
            </Modal>
        }
        </div>
    )
}

export default MyHostedSpots;