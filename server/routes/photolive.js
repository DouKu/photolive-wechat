import photoliveController from '../controllers/photolive'

export const photolive = (commonRouter, authRouter) => {
  commonRouter.post('/getPhoto', photoliveController.getPhoto)
}
