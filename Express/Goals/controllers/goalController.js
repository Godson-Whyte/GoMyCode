const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoal = asyncHandler(async(req, res) =>{
    if(!req.body.name && !req.body.text && !req.body.coompleted){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        name: req.body.name,
        text: req.body.text,
        coompleted: req.body.coompleted,
    })
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateGoal)
})

const deleteGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await Goal.findByIdAndDelete()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}