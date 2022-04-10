const express = require("express")
const router = new express.Router()
const mensRanking = require("../models/mens")

// we will handle post req = Create=post
router.post("/mens", async (req, res)=>{
    try {
        const addingRecords = new mensRanking(req.body)
        console.log(req.body)
      const insertMens = await addingRecords.save()
      res.status(201).send(insertMens)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

// we will handle Get req 
router.get("/mens", async (req, res)=>{
    try {
        const getMens = await mensRanking.find().sort({"ranking": 1})
      res.send(getMens)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

// we will handle Get req  by id
router.get("/mens/:id", async (req, res)=>{
    try {
        const _id = req.params.id
        const getOneMens = await mensRanking.findById(_id)
      res.send(getOneMens)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

// Find by id and update
router.patch("/mens/:id", async (req, res)=>{
    try {
        const _id = req.params.id
        const updateRecord = await mensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })
      res.send(updateRecord)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


// Find by id and Delete
router.delete("/mens/:id", async (req, res)=>{
    try {
        const _id = req.params.id
        const updateRecord = await mensRanking.findByIdAndDelete(_id)
      res.send(updateRecord)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router