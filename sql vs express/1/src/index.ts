import  express  from "express";
import { nanoid } from "nanoid";
import post from "path"
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(9090,()=>{
  console.log('server has been started on port:9090...')
})