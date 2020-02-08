import * as express from 'express'

const route = express.Router()

route.get('/', (req, res) => {
  res.status(200).json({mesege: 'Pagina Inicial'})
})

export default route;

