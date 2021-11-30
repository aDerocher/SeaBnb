import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getUsersSpots, newSpot } from '../../store/spots'
import MyHostedSpots from './MyHostedSpots';
import './HostedSpots.css';

function HostedSpots({addingNew}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const [ newName, setNewName ] = useState('');
    const [ newLocation, setNewLocation ] = useState('');
    const [ newPrice, setNewPrice ] = useState(10000);
    const [ newDescription, setNewDescription ] = useState('');
    const [ newPhotos, setNewPhotos ] = useState([]);
    const [ fileObj, setFileObj ] = useState(null);
    const [ viewForm, setViewForm ] = useState(addingNew);
    // \\\\\\\\\\\\\\\\ Error States ///////////////////////////
    const [ newSpotErrors, setNewSpotErrors ] = useState([]);
    const [ photoCountE, setPhotoCountE ] = useState(false);
    const [ errorsHidden, setErrorsHidden ] = useState(true);

    // get all of the spots hosted by the user
    useEffect(() => {
        dispatch(getUsersSpots(sessionUser.id))
    },[ dispatch, sessionUser ])
    
    // error checks for new spot creation
    useEffect(() => {
        let newErrors = [];
        if(newName.length < 2) newErrors.push('Ship Name must be longer')
        if(newName.length > 50) newErrors.push('Ship Name can not exceed 50 characters')
        if(newPrice < 5000) newErrors.push('Ship price must be a minimum of $5,000 per night')
        if(newDescription.length > 500) newErrors.push('Description can not exceed 500 characters')
        if(newDescription.length < 10) newErrors.push('Description must be at least 10 characters')
        if(newLocation.length < 4) newErrors.push('Location name must be at least 4 characters')
        if(newLocation.length > 50) newErrors.push('Location name can not exceed 50 characters')
        setNewSpotErrors(newErrors);
    }, [newName, newLocation, newPrice, newDescription])


    // handle the adding/removing of photos to the new spot form
    const updateFile = (e) => {
        setPhotoCountE(false)
        const file = e.target.files;
        setFileObj(e.target.files)
        if(file.length + newPhotos.length > 5){
            console.log(file.length)
            console.log(newPhotos.length)
            setPhotoCountE(true)
            return
        }
        setNewPhotos([...newPhotos, ...file])
        console.log(newPhotos)
    };

    // when adding photos, prevent duplicates 
    const updateFileRemove = (name) => {
        let photos = newPhotos.filter((p)=> {
            return p.name !== name
        })
        setNewPhotos(photos)
    }

    // handle form submission for new spot
    const handleListSpot = (e) => {
        e.preventDefault()
        setErrorsHidden(false)
        if(newSpotErrors.length > 0){
            return
        }
        const spotData = {
            host: sessionUser.id,
            name: newName,
            location: newLocation,
            price: newPrice,
            description: newDescription,
            photos: newPhotos
        }
        dispatch(newSpot(spotData))
        setViewForm(!viewForm)
    }

    
  return(
    <>
        <div className='trips-title'>
            <div className='flex-row-cont'>
                <Link style={{textDecoration:'none'}} to={`/users/${sessionUser.id}`}><h2 className='title-text'>Trips</h2></Link>
                <h2 className='title-text active-title'>Hosting</h2>
            </div>
        </div>
        <div className='subtitle-container'> 
            {!viewForm &&
                <p className='subtitle h-sub hover-hand' onClick={e=>setViewForm(!viewForm)}>Add a new spot to host</p>}
            {viewForm &&
                <p className='subtitle h-sub hover-hand' onClick={e=>setViewForm(!viewForm)}>View My Spots</p>}
        </div>
{/* ============ ALL USERS HOSTED SPOTS ================================================================== */}
        {!viewForm &&
            <div className='trips-title hosted-spots-cont'>
                <MyHostedSpots />
            </div>
        }
{/* ============ FORM FOR HOSTING NEW SPOT =============================================================== */}
        {viewForm &&
        <div className='new-spot-form-cont'>
            <form className='new-spot-form flex-col-cont' action='/spots/new' method='post' >
                <ul hidden={errorsHidden}>
                    {newSpotErrors.map((e, i)=> (
                        <li key={i} className='error-text'>• {e}</li>
                    ))}
                </ul>
                <div className='spot-form-sec'>
                    <label>Ship Name:</label>
                    <input value={newName} maxLength='50' placeholder='S.S. Nebuchadnezzer' onChange={e=>setNewName(e.target.value)} type='text'></input>
                </div>
                <div className='spot-form-sec'>
                    <label>Price per Night</label>
                    <input value={newPrice} min='5000' onChange={e=>setNewPrice(e.target.value)} type='number'></input>
                </div>
                <div className='spot-form-sec'>
                    <label>Desription</label>
                    <textarea value={newDescription} maxLength='500' cols='50' rows='7' onChange={e=>setNewDescription(e.target.value)} ></textarea>
                </div>
                <div className='spot-form-sec'>
                    <label>Location</label>
                    <input value={newLocation} maxLength='50' placeholder='Fiji? Capetown? Greenland?' onChange={e=>setNewLocation(e.target.value)} type='text'></input>
                </div>
                <br />
                <div className='spot-form-sec'>
                    <label>Add Photos</label>
                    {photoCountE && 
                        <p className='error-text'>Spots can only have 5 Photos maximum</p>
                    }
                    <div className='file-names-sec'>
                        <div className='flex-col-cont'>
                            <p className='small-grey-label'>Add up to 5 photos</p>
                            <input onChange={updateFile} type='file' disabled={newPhotos.length >= 5} multiple></input>
                        </div>
                        {newPhotos.length > 0 && 
                            <div className='file-names'>
                            { newPhotos?.map((p,i) => (
                                <div className='file-line' key={i}>
                                    <div onClick={e=>updateFileRemove(p.name)} className='remove-file-btn hover-hand'>X</div>
                                    <p className='file-name' key={i}>{p.name}</p>
                                </div>
                            ))}
                            </div>
                        }
                    </div>
                </div>
                <div className='spot-form-sec'>
                    <br />
                    <button disabled={!errorsHidden && newSpotErrors.length > 0}type='submit' className='dis spot-form-btn' onClick={e=>handleListSpot(e)}>List My Spot</button>
                </div>
            </form>
            <button className='cancel-btn sf-cancel'>Cancel</button>
        </div>
        }
    </>
  )
}

export default HostedSpots;