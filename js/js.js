var a = document.getElementById('btn');


a.onclick = function () {
  a = prompt('Введите число не меньше нуля');
  if ( a>=0 )
    var b = prompt('Введите прибовляемое число')
  else
   window.alert('Ошибка! Возможно что вы ввели букву или число ниже 0')
  if ( b>=0 ){
    var c = Number(a)+Number(b)
    window.alert(c)
}
  else
    window.alert('Ошибка! Возможно что вы ввели букву или число ниже 0')
}
