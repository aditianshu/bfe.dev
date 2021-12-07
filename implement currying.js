

function curry(fn) {
  return function cy(...args){
    if(args.length >= fn.length){ //check if arguments is equal to required arguments
     return fn.apply(this, args); 
    }
    else{
      return cy.bind(this, ...args); //bind and return function 
    }
  }
}
