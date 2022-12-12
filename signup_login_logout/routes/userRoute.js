const express = require('express')
const router = express.Router()


const {
    logout,
    loginUser,
    getMe,
  } = require('../controllers/userControler')
  const { protect } = require('../middlewares/authmw')
  
  router.post('/login', loginUser)
  router.get('/me', protect, getMe)
  router.post('/logout' , logout)
  

module.exports = router

// router.get('/' , (req, res)=> { res.status(200).json({message: "Ok"})
// })
// router.delete('/id' , (req, res)=> { res.status(200).json({message: `Delete User ${req.params.id}`})
// })

