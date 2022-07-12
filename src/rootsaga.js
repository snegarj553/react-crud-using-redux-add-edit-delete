import {watchGetUser} from "./watchgetuser";


export default function* (){
  yield [
    watchGetUser()
  ] 

  
}