function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




function numb(){
var a = prompt('1+1=?')
if (a==2){
var b = confirm('правильно')
}
else{ confirm('Не правильно.Попробуйте еще раз');
numb() }}
numb();

function numb2(){
  var c = prompt(random(1, 20))
  if (c == 2)
  var i = confirm('правильно')
  else{ confirm('Не правильно.Попробуйте еще раз');
  numb2() }

  }

numb2()
