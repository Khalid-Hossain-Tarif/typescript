// import { Circle } from "./module/Circle"
// import * as Shapes from "./module/Shapes"

// const circle = Circle
// console.log(circle)

// const shapes = Shapes.Shapes
// console.log(shapes)


//Re-exporting
import { Circle, Shapes, Square } from "./module"  //set "moduleResolution": "node", in tsconfig.json

const allShapes = Circle + ' ' +  Shapes + ' ' + Square
console.log('All Shapes: ' + allShapes)