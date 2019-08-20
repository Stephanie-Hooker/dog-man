import dogServices from "../services/dogServices.js";

//private

let _dogServices = new dogServices()

function _draw() {
  let nameElement = document.querySelector("#dog-name")
  let petCountElement = document.querySelector("#pet-count")
  let dog = _dogServices.Dog
  nameElement.textContent = dog.name
  petCountElement.textContent = dog.petCount.toString()

}

//public
export default class dogController {
  constructor() {
    console.log("dog controller working")
    _draw()
  }

  pet() {
    _dogServices.pet()
    _draw()
  }
  dogBone() {
    _dogServices.dogBone()
    _draw()
  }

}