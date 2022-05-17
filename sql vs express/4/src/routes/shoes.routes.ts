import { Router } from "express";
import shoesStorage from "../storage/shoes.storage"
const routes = Router()
routes.get('/shoes',(req,res) => {
  res.json(shoesStorage.allshoes)
})
routes.get('/shoes/:brand',(req,res) => {
  res.json(shoesStorage.search)
})
routes.post('/shoes',(req,res) => {
  res.json(shoesStorage.addShoes)
})
routes.delete('/shoes/:id',(req,res)=>{
  res.json(shoesStorage.remove)
})
export default routes