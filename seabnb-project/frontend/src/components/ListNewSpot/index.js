import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { newSpot } from './../../store/spots'
import './ListNewSpot.css';
import { set } from 'js-cookie';

function ListNewSpot(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(()=>{
    }, [ dispatch]);


    const [ newName, setNewName ] = useState('');
    const [ newLocation, setNewLocation ] = useState('');
    const [ newPrice, setNewPrice ] = useState(10000);
    const [ newDescription, setNewDescription ] = useState('');

    const [ newPhotos, setNewPhotos ] = useState([]);
    const [ newPhoto1, setNewPhoto1 ] = useState('');
    const [ newPhoto2, setNewPhoto2 ] = useState(null);
    // const [ newPhoto3, setNewPhoto3 ] = useState(null);
    // const [ newPhoto4, setNewPhoto4 ] = useState(null);
    // const [ newPhoto5, setNewPhoto5 ] = useState(null);

    const updateFile = (e) => {
        const file = e.target.files;
        setNewPhotos([...newPhotos, ...file])
        console.log(e.target.files)
        // switch (x){
        //     case 1:

        //         break;
        //     case 1:

        //         break;
        //     default:
        //         break;

        // }
        setNewPhoto1(file)
    };

    const handleListSpot = (e) => {
        e.preventDefault()
        const spotData = {
            host: sessionUser.id,
            name: newName,
            location: newLocation,
            price: newPrice,
            description: newDescription,
            photos: newPhotos
            // reviews: spotData.reviews,
            // rules: spotData.rules,
            // amenities: spotData.amenities,
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
        <form className='flex-col-cont' action='/spots/new' method='post' >
            <label>Ship Name:</label>
            <input value={newName} onChange={e=>setNewName(e.target.value)} type='text'></input>
            <label>Price per Night</label>
            <input value={newPrice} onChange={e=>setNewPrice(e.target.value)} type='number'></input>
            <label>Desription</label>
            <textarea value={newDescription} onChange={e=>setNewDescription(e.target.value)} ></textarea>
            <label>Location</label>
            <input value={newLocation} onChange={e=>setNewLocation(e.target.value)} type='text'></input>
            <label>Photo 1</label>
            <input onChange={updateFile} type='file' multiple></input>
            {/* <label>Photo 2</label> */}
            {/* <input onChange={updateFile} name='photos' type='file' multiple></input> */}
            {/* <label>Photo 3</label>
            <input value={newPhoto3} onChange={e=>setNewPhoto3(e.target.value)} type='text'></input>
            <label>Photo 4</label>
            <input value={newPhoto4} onChange={e=>setNewPhoto4(e.target.value)} type='text'></input>
            <label>Photo 5</label>
            <input value={newPhoto5} onChange={e=>setNewPhoto5(e.target.value)} type='text'></input> */}
            <button type='submit' onClick={e=>handleListSpot(e)}>List My Spot</button>
        </form>
      </div>
      { newPhotos.map((p,i) => (
          <p key={i}>{p.type}</p>
      ))
      }
      {/* <img src='https://seabnb.s3.us-east-2.amazonaws.com/1637599817985.png'></img> */}

    </>
  )
}

export default ListNewSpot;