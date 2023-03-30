function saturdayFun (x = "roller-skate"){
    return "This Saturday, I want to " + x + "!"
  }
console.log(saturdayFun())

function mondayWork (b = "go to the office"){
    return "This Monday, I will " + b + "."
}

function wrapAdjective (sign){
    const innerFunction = function (a = "special") {
        return "You are " + sign + a + sign +"!"; 
      };
      return innerFunction; 
}