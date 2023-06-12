import { Box, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { createRef, useEffect, useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import listStyles from './Styles';

const List = ({type, setType, rating, setRating, places, childClick, isLoading}) => {
  const classes = listStyles
  const [elRefs, setElRefs] = useState([])

   useEffect(()=>{
     const arrayplaces= Array(places)
     const refs = Object(arrayplaces[0])
    setElRefs(Array(refs.length).fill().map((_, i)=> (refs[i]||createRef())))
   },[places])

  return (
    <Box sx={classes.container}>
        <Typography variant='h4'>
          Restaurantes, Hotéis & Atrações proximo de você!
        </Typography>
        {isLoading?(<Box sx={classes.loading}>
          <CircularProgress size='5rem'/>
        </Box >):
        (<><FormControl variant="standard" sx={classes.formControl}>
          <InputLabel id="type">Tipos</InputLabel>
          <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value='restaurants'>Restaurantes</MenuItem>
            <MenuItem value='hotels'>Hotéis</MenuItem>
            <MenuItem value='attractions'>Atrações</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={classes.formControl}>
          <InputLabel>Avaliações</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value='0'>Todos</MenuItem>
            <MenuItem value='3'>Acima de 3☆</MenuItem>
            <MenuItem value='4'>Acima de 4☆</MenuItem>
            <MenuItem value='4.5'>☆Tops☆</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} sx={classes.list}>
          {places?places.map((place, i)=>{
          return(
            place.name?
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <PlaceDetails 
                selected={(Number(childClick) === i)}
                refProp={elRefs[i]}
                place={place}
                />
            </Grid>
            :null
          )}):null}
        </Grid></>)}
    </Box>
  )
}

export default List