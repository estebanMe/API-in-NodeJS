"use strict"
const express = require('express')
const _ = require('lodash')
const Movie = require('../lib/model/movie')
const router = express.Router()


router.
post('/', function(req, res, next) { //Method POST 
    console.log("POST: ", req.body)
    if (!req.body) {
        res
            .status(403)
            .json({ error: true, message: 'body empty' })
    }

    let _movie = req.body

    new Movie({
        title: _movie.title,
        year: _movie.year
    })

    .save((err, movie) => {
        if (err) {
            res
                .status(403)
                .json({ error: true, message: 'Params empty' })
        }
        res
            .status(201)
            .json({ movie: movie })
    })
})


//Method GET all
.get('/', function(req, res, next) {
        Movie.find({}, (err, movies) => {
            if (err) {
                res
                    .status(403)
                    .json({ error: true, message: 'Params empty' })
            }
            res
                .status(200)
                .json({ movies: movies })
        })
    })
    //Method GET by :id
    .get('/:id', function(req, res, next) {

        if (!req.params.id) {
            res
                .status(403)
                .json({ error: true, message: 'body empty' })
        }

        let _id = req.params.id
        Movie.findOne({ _id: _id }, (err, movie) => {
            if (err) {
                res
                    .status(403)
                    .json({ error: true, message: 'Params empty' })
            }
            res
                .status(200)
                .json({ movie: movie })
        })
    })

//Method PUT 
.put('/:id', function(req, res, next) {
        console.log("PUT:id", req.params.id)
        if (!req.params.id && !req.body) {
            res
                .status(403)
                .json({ error: true, message: 'Params empty' })
        }

        let _id = req.params.id
        let new_movie = req.body

        Movie.findByIdAndUpdate(_id, {
            title: new_movie.title,
            year: new_movie.year
        }, { new: true }, (err, movie) => {
            if (err) {
                res
                    .status(403)
                    .json({ error: true, message: 'Params empty' })
            }
            res
                .status(200)
                .json({ movie: movie })
        })
    })
    //Method PUT 
    .delete('/:id', function(req, res, next) {
        console.log("DELETE:id", req.params.id)
        if (!req.params.id) {
            res
                .status(403)
                .json({ error: true, message: 'Params empty' })
        }

        let _id = req.params.id

        Movie.findByIdAndRemove(_id, (err, done) => {
            if (err) {
                res
                    .status(403)
                    .json({ error: true, message: 'Params empty' })
            }
            res
                .status(400)
                .json({})
        })
    })


module.exports = router