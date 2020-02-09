import { PassportStatic } from 'passport'
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt'

import User from '../schemas/user.schema'

function configureJWT(passport: PassportStatic) {
  passport.use('jwt', new JWTStrategy({
          secretOrKey: process.env.APP_JWT_SECRET,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          passReqToCallback: true,
      }, (req, payload, done) => {
          const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
          
          SessionModel
              .findOne({ token })
              .then(session => {
                  if (!session || session.fingerprint != req.fingerprint.hash) {
                      throw `Invalid token`;
                  }
                  
                  return User.findById(payload.id);
              })
              .then(user => {
                  if (!user)
                      throw `No user found with id ${payload.id}`;
                  
                  done(null, user);
              })
              .catch(err => {
                  if (typeof err == 'string') {
                      err = { message: err };
                  }
                  
                  done(err);
              });
      })
  )
  
  return passport;
}

export {
  configureJWT,
};