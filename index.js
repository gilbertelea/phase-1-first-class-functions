function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction() {
    
let fn = () => "" ;
return fn
}

function returnsAnAnonymousFunction() {
    debugger;
    let fn = () => "" ;
  return ()=> {}
  
}