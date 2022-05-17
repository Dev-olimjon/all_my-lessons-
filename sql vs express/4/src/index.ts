import express  from "express";
import cors from "cors"
import shoesRoutes from "./routes/shoes.routes";
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/shoes',shoesRoutes)
app.listen(8080,()=>{
  console.log('Server has been started on port 8080')
})