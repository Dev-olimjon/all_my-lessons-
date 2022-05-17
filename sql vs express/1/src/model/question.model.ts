import { nanoid } from "nanoid";
export type Question = {
  id:string,
  question:string,
  variants:Variant[]
}

export type Variant = {
  text:string,
  isRight:boolean
}