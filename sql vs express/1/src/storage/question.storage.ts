import { nanoid } from "nanoid"
import {Question,Variant} from "../model/question.model"
let questions:Question[] = [
  {
    id:nanoid(),
    question:'kim darsni tshunmadi?',
    variants:[
      {text:"Abror",isRight:true},
      {text:"Olimjon",isRight:false},
      {text:"Javohir",isRight:false},
    ]
  },
  {
    id:nanoid(),
    question:'kim darsni tshunmadi?',
    variants:[
      {text:"Abror",isRight:true},
      {text:"Olimjon",isRight:false},
      {text:"Javohir",isRight:false},
    ]
  },
  {
    id:nanoid(),
    question:'kim darsni tshunmadi?',
    variants:[
      {text:"Abror",isRight:true},
      {text:"Olimjon",isRight:false},
      {text:"Javohir",isRight:false},
    ]
  },
  {
    id:nanoid(),
    question:'kim darsni tshunmadi?',
    variants:[
      {text:"Abror",isRight:false },
      {text:"Olimjon",isRight:false},
      {text:"Javohir",isRight:true},
    ]
  }
]