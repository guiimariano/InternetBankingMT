import { NextFunction, Request, Response } from 'express'
import * as passport from 'passport'

export default (req: Request, res :Response, next: NextFunction) => {
  passport.authenticate('jwt', function(err, user, _info) {
    if(err) return next(err)

    if(!user) return res.status(401)
      .json({ message: 'Access denied - No token provided!' })
    
    req.user = user
    next()
  })(req, res, next)

}