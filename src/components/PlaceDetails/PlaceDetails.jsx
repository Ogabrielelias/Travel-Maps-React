import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material'
import React from 'react'
import placeStyles from './Styles'

const PlaceDetails = ({place, selected, refProp}) => {

  const classes =  placeStyles

    if (selected){
      // eslint-disable-next-line
      if(refProp!=undefined){
      const elemento = refProp.current
      // eslint-disable-next-line
      if(elemento!=undefined){
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    
  }
}

  return (
    <Card elevation={6}>
      <CardMedia
        style={{height:350}}
        image={place.photo?place.photo.images.large.url:'https://www.eurodicas.com.br/wp-content/uploads/2021/09/restaurante-em-portugal-1200x720.jpg'}
        title={place.name}
      />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            {place.name}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Rating value={Number(place.rating)} readOnly></Rating>
            <Typography gutterBottom variant='subtitle1'> de {place.num_reviews} avalições</Typography>
          </Box>
          {place.price_level && (<Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Preço:</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          </Box>)}
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Rank:</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>
          {place.cuisine?place.cuisine.map(({name})=>(
            <Chip key={name} size='small' label={name} sx={classes.chip}/>
          )):null}
          {place.address && (
              <Typography style={{gap:'30%', textAlign:'right'}} gutterBottom variant='body2' color='textSecondaty' sx={classes.subtitle}>
                <LocationOnIcon/>
                {place.address}
                </Typography>
          )}
          {place.phone &&( 
                <Typography gutterBottom variant='body2' color='textSecondaty' sx={classes.subtitle}>
                  <PhoneIcon/>
                  {place.phone}
                </Typography>)}
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={()=>window.open(place.web_url,'_blank')}>
            Trip Advisor
          </Button>
          {place.website &&(<Button size='small' color='primary' onClick={()=>window.open(place.website,'_blank')}>
            Website
          </Button>)}
        </CardActions>
    </Card>
  )
}

export default PlaceDetails