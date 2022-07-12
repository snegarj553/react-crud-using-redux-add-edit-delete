import watchgetuser from "./watchgetuser";


export default function rootsaga(){
  yield[
    watchgetuser()
  ]
}