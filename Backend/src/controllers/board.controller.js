const Board = require('../models/board.js')
const Section = require('../models/section.js')
const Task = require('../models/task.js')

const createBoard= async(req,res)=>{
    try {
        const boardCount= await Board.find().count()
        const board= await Board.create({
            user: req.user._id,
            position: boardCount >0 ? boardCount :0
        })
        res.status(201).json(board)
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}



const getAll= async(req,res)=>{
    try {
        const boards= await Board.find({ user: req.user._id }).sort('-position')
        res.status(200).json(boards)
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

const updatePosition= async(req, res)=>{
    const {boards}= req.body
    try {
        for(const key in boards.reverse()){
            const board= boards[key]
            await Board.findByIdAndUpdate(board.id,{
                $set:{ position:key}
            })
        }
        res.status(200).json('Updated')
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}