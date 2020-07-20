
// 1. Copy and paste your prototype in here and refactor into class syntax.

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. 
//Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class Cuboidmaker {
    constructor(measure) {
        this.length = measure.length;
        this.width = measure.width;
        this.height = measure.height;
    };

  
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  volume() {
    return volume = this.length * this.width * this.height;
  };
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  surfaceArea() {
    return surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  };
}
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const Cuboid = new Cuboidmaker({
    length: 4,
    width : 5,
    height : 5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("The volume of Cuboid", Cuboid.volume()); // 100
console.log("The SurfaceArea of Cuboid",Cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboidmaker {
    constructor(measure) {
        super(measure);
    }

    cubevolume() {
        return  this.length * this.width * this.height;
    }

    cubeArea() {
        return  (6 *(this.length * this.width));
    }
}
 
const cube = new CubeMaker ({
    length : 4,
    width : 4,
    height : 4
});

console.log("The Volume of the Cube", cube.cubevolume());
console.log("The SufaceArea of the Cube", cube.cubeArea());