'use strict'

const next = require('next')
const express = require('express')
const mongoose = require('mongoose')
const post = require('./models/Post')

var config = require('./config')

mongoose.connect(config.DB, {
    useNewUrlParser: true
}, (err, db) => {
    if(err) console.log(err)
    else console.log('Connected to the DB')
})


const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express()

    server.use(express.json())

    
//create a post

const d = new Date()

const datest = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()

server.post( '/api/create' ,(req, res) => {
    post.create(
        {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: datest ,
            viewCount: 0,
            likes: 0,
            dislikes: 0
        }, (err, post) => {
            if(err) res.status(400).send('Unable to create todo list')
            res.status(200).json(post)
        } 
    
    )
})

//get all posts

server.get('/api/all',(req, res, next) => {
    post.find((err, posts) => {
        if(err) return next(new Error(err))

        res.json(posts)
    }).catch(err => console.log(err))
})


//delete a post

server.get('/api/delete/:id', (req, res, next) => {
    const id = req.params.id
    post.findByIdAndRemove(id, (err, post) => {
        if(err) return next(new Error('Post not found'))

        res.json('Post deleted successfully')
    })
})

// update a post views

server.post( '/api/update/:id', (req, res, next) => {
    const id = req.params.id
    post.findById(id, (err, post) => {
        if(err) return next(new Error('Post not found'))
        else {

            post.viewCount += 1

            post.save(
                (err, post) => {
                    if(err) res.status(400).send('Unable to update the post')
                    else res.status(200).json(post)
                }
            )
        }
    })
})

server.post( '/api/reactions/:id', (req, res, next) => {
    const id = req.params.id
    post.findById(id, (err, post) => {
        if(err) return next(new Error('Post not found'))
        else {

            if(req.body.likes){
                post.likes += 1
            }
            if(req.body.dislikes){
                post.dislikes += 1
            }

            post.save(
                (err, post) => {
                    if(err) res.status(400).send('Unable to update the post')
                    else res.status(200).json(post)
                }
            )
        }
    })
})


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if(err) throw err
        console.log(`Listening on port ${port}`)
    })
})