import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Box, Paper, Rating, Typography, useMediaQuery } from '@mui/material'
import GooogleMapReact from 'google-map-react'
import React from 'react'
import mapStyles from './Styles'

const Map = ({places, setCoordinates, setBounds, coord, setChildClick}) => {

  const classes = mapStyles
  const isMobile = useMediaQuery('(min-width:600px)')
  return (
    <Box sx={classes.mapContainer}>
      <GooogleMapReact
        bootstrapURLKeys={{key:process.env.REACT_APP_MAPS_KEY}}
        defaultCenter={coord}
        center={coord}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={0}
        onChange={(e)=>{
           setCoordinates({lat:e.center.lat, lng:e.center.lng})
           setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        onChildClick={(child)=>{setChildClick(child);}}
      >
          {places?places.map((place,i)=>{ return(
            place.name?
            <Box sx={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            >
              {!isMobile?
              (<LocationOnOutlinedIcon color='primary' fontSize="large"/>):
              <Paper elevation={3} sx={classes.paper}>
                <Typography sx={classes.typography}
                variant='subtitle2'
                gutterBottom
                >
                  {place.name}
                </Typography>
                <img sx={classes.pointer}
                src={place.photo?place.photo.images.large.url:'https://www.eurodicas.com.br/wp-content/uploads/2021/09/restaurante-em-portugal-1200x720.jpg'}
                alt={place.name}/>
                <Rating size='small' value={Number(place.rating)} readOnly></Rating>
              </Paper>}
            </Box>
          :null)}):null}
      </GooogleMapReact>
    </Box >
  )
}

export default Map