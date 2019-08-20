import Dog from "../model/dog.js";


//private
let _dog = new Dog("Doggie")


//public
export default class dogServices {
  constructor() {
    console.log("dogService working")

  }
  pet() {
    _dog.petCount++
  }
  dogBone() {
    _dog.petCount = 0
  }

  get Dog() {
    return _dog
  }
}
