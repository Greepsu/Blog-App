const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

//Get all message
router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.send(post)
        console.log(post)    
    } catch (error) {
        res.status(400).send(error)
    }
})

//Post a new message
router.post('/', async (req, res) => {
    const post = new Post({
        message: req.body.message
    })
    console.log(req.body)
    try {
        const savedPost = await post.save();
        res.send(savedPost)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router