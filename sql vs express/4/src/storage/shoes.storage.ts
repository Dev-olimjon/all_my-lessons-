import cors from "cors"
import  Shoes  from "../model/shoes.model"
export let shoesall:Shoes[] = []

function allshoes(){
  return shoesall
}

function search(brand:string){
  let show = []
  for (const shoes of shoesall) {
    if(shoes.brand === brand){
      show.push(shoes)
    }
  }
  return show
}
function addShoes(shoes:Shoes){
  shoesall.push(shoes)
}
function remove(id:string){
  let idfromshoes = shoesall.findIndex(shoes => shoes.id === id)
  shoesall.splice(idfromshoes,1)
}

export default{
  allshoes,
  search,
  addShoes,
  remove
}