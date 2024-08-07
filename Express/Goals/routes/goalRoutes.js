const express = require('express')
const router = express.Router()
const {getGoals, getGoal, setGoal, updateGoal, deleteGoal, } = require('../controllers/goalController')

router.get('/', getGoals)
router.get('/:id', getGoal)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)


module.exports = router