function sum(num) {
  const f = function(num2){
    return num2? sum(num + num2) : num;
  }
  f.valueOf = () => num;
  return f;
}
