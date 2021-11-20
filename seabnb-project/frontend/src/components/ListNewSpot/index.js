import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { newSpot } from './../../store/spots'
import './ListNewSpot.css';
import { set } from 'js-cookie';

function ListNewSpot(){
  const history = useHistory();
  const dispatch = useDispatch();
  const allUserBookings = useSelector(state => state.session.userBookings );
  const sessionUser = useSelector(state => state.session.user)

  useEffect(()=>{
  }, [ dispatch]);

  const goToSpot=(e, spotId)=>{
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  }


  const [ newName, setNewName ] = useState('');
  const [ newLocation, setNewLocation ] = useState('');
  const [ newPrice, setNewPrice ] = useState(10000);
  const [ newDescription, setNewDescription ] = useState('');
  const [ newPhoto1, setNewPhoto1 ] = useState('');
  const [ newPhoto2, setNewPhoto2 ] = useState('');
  const [ newPhoto3, setNewPhoto3 ] = useState('');
  const [ newPhoto4, setNewPhoto4 ] = useState('');
  const [ newPhoto5, setNewPhoto5 ] = useState('');

    const handleListSpot = (e) => {
        e.preventDefault()
        const spotData = {
            host: sessionUser.id,
            name: newName,
            location: newLocation,
            price: newPrice,
            description: newDescription,
            // reviews: spotData.reviews,
            // rules: spotData.rules,
            // amenities: spotData.amenities,
        }
        let newPhotos = [ newPhoto1, newPhoto2, newPhoto3, newPhoto4, newPhoto5 ]
        for(let i=0; i <= 4; i++){
            let p = newPhotos[i];
            if(p.length > 5) {
                spotData[`photo${i}`] = p
            } else {
                spotData[`photo${i}`] = null
            }
        }
        dispatch(newSpot(spotData))
    }


  return(
    <>
      <div className='trips-title'>
        <h2>Trips</h2>
      </div>
      <div className='subtitle-container'>  
        <p className='subtitle'>Upcoming</p>
      </div>
      
      <div className='trips-section'>
        <form className='flex-col-cont' onSubmit={e=>handleListSpot()}>
            <label>Ship Name:</label>
            <input value={newName} onChange={e=>setNewName(e.target.value)} type='text'></input>
            <label>Price per Night</label>
            <input value={newPrice} onChange={e=>setNewPrice(e.target.value)} type='number'></input>
            <label>Desription</label>
            <textarea value={newDescription} onChange={e=>setNewDescription(e.target.value)} ></textarea>
            <label>Location</label>
            <input value={newLocation} onChange={e=>setNewLocation(e.target.value)} type='text'></input>
            <label>Photo 1</label>
            <input value={newPhoto1} onChange={e=>setNewPhoto1(e.target.value)} type='text'></input>
            <label>Photo 2</label>
            <input value={newPhoto2} onChange={e=>setNewPhoto2(e.target.value)} type='text'></input>
            <label>Photo 3</label>
            <input value={newPhoto3} onChange={e=>setNewPhoto3(e.target.value)} type='text'></input>
            <label>Photo 4</label>
            <input value={newPhoto4} onChange={e=>setNewPhoto4(e.target.value)} type='text'></input>
            <label>Photo 5</label>
            <input value={newPhoto5} onChange={e=>setNewPhoto5(e.target.value)} type='text'></input>
            <button type='submit'>List My Spot</button>
        </form>
          
      </div>

    </>
  )
}

export default ListNewSpot;