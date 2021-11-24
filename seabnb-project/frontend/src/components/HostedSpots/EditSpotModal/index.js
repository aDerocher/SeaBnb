import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editSpot, deleteSpot } from '../../../store/spots';


function EditSpotModal(props) {
    const dispatch = useDispatch()
    
    // get the spot to edit from the users hosted spots list
    const sessionUser = useSelector(state => state.session.user)
    const spots = useSelector(state => state.spots)
    const editingSpot = spots.filter((s)=>{
        return s.id === props.spotId
    })[0]

    // declare variables for the form
    const [ editedName, setEditedName ] = useState(editingSpot.name);
    const [ editedLocation, setEditedLocation ] = useState(editingSpot.location);
    const [ editedPrice, setEditedPrice ] = useState(editingSpot.price);
    const [ editedDescription, setEditedDescription ] = useState(editingSpot.description);
    // --------- For Images ------------------------------
    // const [ editedPhotos, setEditedPhotos ] = useState([]);
    // const [ fileObj, setFileObj ] = useState(null);
    // const [ viewForm, setViewForm ] = useState(addingedited);
    // \\\\\\\\\\\\\\\\ Error States ///////////////////////////
    const [ editedSpotErrors, setEditedSpotErrors ] = useState([]);
    // const [ photoCountE, setPhotoCountE ] = useState(false);
    const [ errorsHidden, setErrorsHidden ] = useState(true);
    const [ hideConfDelete, setHideConfDelete ] = useState(true);


    useEffect(() => {
        let newErrors = [];
        if(editedName.length < 2) newErrors.push('Ship Name must be longer')
        if(editedName.length > 50) newErrors.push('Ship Name can not exceed 50 characters')
        if(editedPrice < 5000) newErrors.push('Ship price must be a minimum of $5,000 per night')
        if(editedDescription.length > 500) newErrors.push('Description can not exceed 500 characters')
        if(editedDescription.length < 10) newErrors.push('Description must be at least 10 characters')
        if(editedLocation.length < 4) newErrors.push('Location name must be at least 4 characters')
        if(editedLocation.length > 50) newErrors.push('Location name can not exceed 50 characters')
        setEditedSpotErrors(newErrors);
    }, [editedName, editedLocation, editedPrice, editedDescription])

    const handleEditSpot = (e) => {
        e.preventDefault()
        setErrorsHidden(false)
        if(editedSpotErrors.length > 0){
            return
        }
        const spotData = {
            spotId: editingSpot.id,
            name: editedName,
            location: editedLocation,
            price: editedPrice,
            description: editedDescription
        }
        dispatch(editSpot(spotData));
        setHideConfDelete(true)
        props.onClose()
    }
    
    const handleDeleteSpot = (e) => {
        e.preventDefault()
        dispatch(deleteSpot(editingSpot.id))
        props.onClose()
        setHideConfDelete(true)
    }

    return (
        <div className='edit-spot-cont'>
            <h2 className='edit-spot-form-title'>Edit Spot</h2>
            <form className='edit-spot-form'>
                <ul hidden={errorsHidden}>
                    {editedSpotErrors.map((e, i)=> (
                        <li key={i} className='error-text'>• {e}</li>
                    ))}
                </ul>
                <div className='spot-form-sec'>
                        <label>Ship Name:</label>
                        <input value={editedName} maxLength='50' onChange={e=>setEditedName(e.target.value)} type='text'></input>
                </div>
                <div className='spot-form-sec'>
                    <label>Price per Night</label>
                    <input value={editedPrice} min='5000' onChange={e=>setEditedPrice(e.target.value)} type='number'></input>
                </div>
                <div className='spot-form-sec'>
                    <label>Desription</label>
                    <textarea value={editedDescription} maxLength='500' cols='50' rows='7' onChange={e=>setEditedDescription(e.target.value)} ></textarea>
                </div>
                <div className='spot-form-sec'>
                    <label>Location</label>
                    <input value={editedLocation} maxLength='50' onChange={e=>setEditedLocation(e.target.value)} type='text'></input>
                </div>

                    <br />

            </form>
            <div className='edit-spot-btns-cont'>
                <div className='flex-row-cont'>
                    <button disabled={!errorsHidden && editedSpotErrors.length > 0}
                        type='submit'
                        disabled={!hideConfDelete}
                        className='dis edit-sf edit-spot-form-btn'
                        onClick={e=>handleEditSpot(e)}>
                        Submit Changes
                    </button>
                </div>
                <div className='flex-row-cont'>
                    <button disabled={!hideConfDelete} className='dis delete-sf edit-spot-form-btn' onClick={e=>setHideConfDelete(false)}>Delete Spot</button>
                    <button disabled={!hideConfDelete} className='dis cancel-sf edit-spot-form-btn' onClick={props.onClose}>Cancel</button>
                </div>
                {!hideConfDelete && 
                <div className='spot-confirm-del-cont'>
                    <button className='edit-spot-form-btn delete-sf' onClick={e=>handleDeleteSpot(e)}>Delete Spot</button>
                    <button className='edit-spot-form-btn' onClick={e=>setHideConfDelete(true)}>Cancel</button>
                </div>
                }
            </div>
        </div>
    );
}

export default EditSpotModal;