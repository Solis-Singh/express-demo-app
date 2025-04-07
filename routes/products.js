import express from 'express'

const router = express.Router()

var productslist = ["Pen", "Pencil" ,"Books"];

router.get("/products", (req ,res) => {
    console.log(req.body);
    res.send(`Here is the list of products : ${productslist}`)
})

export default router;