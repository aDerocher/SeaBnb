import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { newSpot, newSinglePhoto } from './../../store/spots'
import './ListNewSpot.css';
import { set } from 'js-cookie';

function ListNewSpot(){
  const history = useHistory();
  const dispatch = useDispatch();
  const allUserBookings = useSelector(state => state.session.userBookings );
  const sessionUser = useSelector(state => state.session.user)

//   useEffect(()=>{
//   }, [ dispatch]);

  const goToSpot=(e, spotId)=>{
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  }


    const [ newName, setNewName ] = useState('');
    const [ newLocation, setNewLocation ] = useState('');
    const [ newPrice, setNewPrice ] = useState(10000);
    const [ newDescription, setNewDescription ] = useState('');
    // const [ newPhoto1, setNewPhoto1 ] = useState(null);
    // const [ newPhoto2, setNewPhoto2 ] = useState(null);
    // const [ newPhoto3, setNewPhoto3 ] = useState(null);
    // const [ newPhoto4, setNewPhoto4 ] = useState(null);
    // const [ newPhoto5, setNewPhoto5 ] = useState(null);

    // const updateFile = (e, x) => {
    //     const file = e.target.files[x];
    //     if (file){
    //         switch(x) {
    //             case 0:
    //                 setNewPhoto1(file)
    //               break;
    //             case 1:
    //                 setNewPhoto2(file)
    //               break;
    //             case 2:
    //                 setNewPhoto3(file)
    //               break;
    //             case 3:
    //                 setNewPhoto4(file)
    //               break;
    //             case 4:
    //                 setNewPhoto5(file)
    //                 break;
    //             default:
    //                 break;
    //         }
    //     };
    // };

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
        // let newPhotos = [ newPhoto1, newPhoto2, newPhoto3, newPhoto4, newPhoto5 ]
        // spotData.photos = newPhotos;
        console.log(spotData, '<===================== frontend spot data')
        dispatch(newSpot(spotData))
    }

    const newSpotTest =() =>{
        dispatch(newSinglePhoto())
    }

  return(
    <>
      <div className='trips-title'>
        <h2>Trips</h2>
        <button onClick={e=>newSpotTest()}>test</button>
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
            {/* <label>Photo 1</label>
            <input value={newPhoto1} onChange={e=> updateFile(e,0)} type='file'></input> */}
            {/* <label>Photo 2</label>
            <input value={newPhoto2} onChange={e=>setNewPhoto2(e.target.value)} type='text'></input>
            <label>Photo 3</label>
            <input value={newPhoto3} onChange={e=>setNewPhoto3(e.target.value)} type='text'></input>
            <label>Photo 4</label>
            <input value={newPhoto4} onChange={e=>setNewPhoto4(e.target.value)} type='text'></input>
            <label>Photo 5</label>
            <input value={newPhoto5} onChange={e=>setNewPhoto5(e.target.value)} type='text'></input> */}
            <button type='submit' onClick={e=>handleListSpot(e)}>List My Spot</button>
        </form>
          
      </div>

    </>
  )
}

export default ListNewSpot;