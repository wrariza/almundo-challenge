import { Router } from 'express'
import  hotels from './../data/data.json'
import _ from 'lodash'
import { stat } from 'fs';

const hotelsRouter = Router()

hotelsRouter.get('/hotels', (req, res) => {
  let data = []
  let query = req.query
  let name = query.name.toUpperCase();
  let stars = String(query.stars).split(',');

  if(stars[0] !== "-1"){  
    _.each(hotels, (hotel) => {
        if ( (stars.indexOf(String(hotel.stars)) !== -1)) {
          data.push(hotel)
        }
    })
  }else{
    data = hotels;
  }
  
  if(name !== ""){
    _.each(data, (hotel) => {
      console.log(_.includes(hotel.name.toUpperCase(), name));
      if ((_.includes(hotel.name.toUpperCase(), name) == true)) {
        data.push(hotel)
      }
    })
  }
 


  res.status(200).json(_.orderBy(data, ['stars'], ['desc']))
  res.end()
})

export default hotelsRouter
