import { Router } from 'express'

import userRoutes from './user.routes'

const Routes = Router()

Routes.get('/', (_req, res) => {
  res.status(200)
  .json({ message: 'Olá, você precisa de um usuário e senha para fazer login' })
})

// Routes.use(authMiddleware)
Routes.use(userRoutes)




export default Routes;