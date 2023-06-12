import { CssBaseline, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coord, setCoord] = useState({lat:-29.23738,lng:-51.88051})
  const [bounds, setBounds] = useState({})
  const [childClick, setChildClick] = useState(null)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoord({lat: latitude, lng:longitude})
    })
  },[])

  useEffect(()=>{
    const filteredArray = places.filter((place)=> place.rating > rating)
    setFilteredPlaces(filteredArray)
    // eslint-disable-next-line
  },[rating])

  useEffect(()=>{
    if (bounds) {
    setIsLoading(true);

    getPlacesData(type, bounds.sw,bounds.ne)
    .then((data)=>{
      setPlaces(data)
      setFilteredPlaces([]);
      setRating('');
      setIsLoading(false)
    })

  }
  },[type,bounds])

  const [isLoading, setIsLoading] = useState(false)


  return (
    <div>
      <CssBaseline/>
      <Header setCoord={setCoord}/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List
    
          type ={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          places={filteredPlaces.length ? filteredPlaces : places}
          childClick={childClick}
          isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
          places={filteredPlaces.length ? filteredPlaces : places}
          setCoordinates={setCoord}
          setBounds={setBounds}
          coord={coord}
          setChildClick={setChildClick}
          />
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
