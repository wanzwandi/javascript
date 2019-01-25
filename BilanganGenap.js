function panggilbilangangenap(){
  var bilangangenap = []
  for (var i = 1; i < 10; i++) {
    if(i%2 === 0){
      bilangangenap.push(i)
    }
  }
    return bilangangenap
}
console.log(panggilbilangangenap())
