import { Router } from 'express'
import hotels from './../data/data.json'
import _ from 'lodash'

const hotelsRouter = Router()

hotelsRouter.get('/hotels', (req, res) => {
  let dataHotels = []
  let data = []
  let query = req.query
  let name = query.name.toUpperCase()
  console.log(typeof (name))
  let stars = String(query.stars).split(',')

  if (stars[0] !== '-1') {
    _.each(hotels, (hotel) => {
      if ((stars.indexOf(String(hotel.stars)) !== -1)) {
        dataHotels.push(hotel)
      }
    })
  } else {
    dataHotels = hotels
  }

  if (name.length > 0) {
    _.each(dataHotels, (hotel) => {
      console.log(_.includes(hotel.name.toUpperCase(), name))
      if ((_.includes(hotel.name.toUpperCase(), name) === true)) {
        data.push(hotel)
      }
    })
  } else {
    data = dataHotels
  }

  data = _.uniqBy(data, 'name')
  data = _.orderBy(data, ['stars'], ['desc'])

  res.status(200).json(data)
  res.end()
})

export default hotelsRouter
