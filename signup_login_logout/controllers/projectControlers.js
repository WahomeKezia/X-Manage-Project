const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')
const User = require('../models/userModel')

// @desc    get projects
// @route   GET /api/projects
// @access  Private
const getproject = asyncHandler(async (req, res) => {
  const projects = await Project.find({ user: req.user.id })

  res.status(200).json(goals)
})

// @desc    Set projects
// @route   POST /api/projects
// @access  Private
const addproject = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const project = await Project.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(goal)
})

// @desc    Update projects
// @route   PUT /api/projects/:id
// @access  Private
const updateproject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (!project) {
    res.status(400)
    throw new Error('Project not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedproject = await Projects.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedproject)
})


module.exports = {
  getproject,
  addproject,
  updateproject,

}