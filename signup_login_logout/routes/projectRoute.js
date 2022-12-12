const express = require('express')
const router = express.Router()

const {
  getproject,
  addproject,
  updateproject,
} = require('../controllers/projectControlers')

const { protect } = require('../middlewares/authmw')

router.route('/').get(protect, getproject).post(protect, addproject)

router.route('/:id').put(protect, updateproject)

module.exports = router