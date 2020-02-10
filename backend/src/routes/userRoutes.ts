import * as express from 'express'

import userController from '../controllers/userController'

const userRoutes = express.Router()

userRoutes.get('/users', userController.index )
userRoutes.post('/users', userController.create )

export default userRoutes