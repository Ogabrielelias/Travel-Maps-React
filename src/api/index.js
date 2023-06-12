import axios from 'axios'


export const getPlacesData = async (type,sw, ne) =>{
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    try{
        const {data: {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              limit: '30',
              currency: 'BRL',
              open_now: 'false',
              lunit: 'km',
              lang: 'pt_BR'
            },
            headers: {

              'X-RapidAPI-Key':process.env.REACT_APP_RAPID_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })

        return data
    } catch(e){
        console.log(e)
    }
}