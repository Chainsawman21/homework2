// Условие

// 2 == 2 - сравнивает наши значения между собой - не строгое сравнение
// 2 === 2 - сравнивает наши значения между собой - строгое сравнение

// if(1 == '1') {
//     console.log('Привет');
// }else {
//     console.log('Пока');
// }

// var a = prompt('Введите слово Привет');

// if(a == 'Привет') {
//     console.log('good');
// }else {
//     console.log('bad');
// }


// var mark = +prompt('Введите вашу оценку');

// if(mark === 5) {
//     console.log("Покупаем айфон");
// }else if(mark === 4) {
//     console.log('Покупаем airpods');
// }else if(mark === 3) {
//     console.log('Ничего не получишь');
// }else if(mark === 2) {
//     console.log('Готовим ремень');
// }else {
//     console.log('The end');
// }




// var secret = prompt('Введите секретное слово');

// if(secret == 'admin' || secret == 'админ' ) {
//      console.log('Доступ открыт');
// }else {
//      console.log('Доступ закрыт');
// }


// оператор или ||
// оператор и &&
// ! - оператор не - ставиться перед значением или функцией  - возвращает противоположное значение
// isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе false


// var a = +prompt('Введите первое число');
// var b = +prompt('Введите второе число');

// if(a > b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + ' больше ' + b);
// }else if(b > a && !isNaN(a) && !isNaN(b)) {
//     console.log(b + ' больше ' + a);
// }else if(b == a && !isNaN(a) && !isNaN(b)) {
//     console.log(a + ' равно ' + b);
// }else {
//     console.log('вы ввели не число');
// }


// var num  = +prompt('Введите день недели');

// switch(num) {
//     case 1:
//         alert('Пн');
//         break;
//     case 2:
//         alert('Вт');
//         break;
//     case 3:
//         alert('Ср');
//         break;
//     default:
//         alert('нет такого дня');
//         break;
// }


// 1 вариант

var marley = +prompt('Ввести свой возраст');

if(marley < 18) {
    alert('Вы ещё молоды вам надо учиться');
}else if(marley > 18 && marley < 50) {
    alert('Вам нужно работать')
}else if(marley > 50 && marley < 59) {
    alert('Вам скоро на пенсию')
}else if(marley > 59 && marley < 100) {
    alert('Вы песионер')
}else(marley > 100) 
    alert('Что-то пошло не так')



 // 2 вариант   

 var watch = +prompt ('Вести время в цифрах');

 switch (watch) {
    case 1:
        alert('1 час ночи');
        break;
     case 2:
     alert('2 часa ночи');
        break;
     case 3:
        alert('3 часa ночи');
            break;
     case 4:
        alert('4 часa ночи');
            break;
     case 5:
        alert('5 часa ночи');
           break;
     case 6:
        alert('6 часа ночи');
            break;
     case 7:
        alert('7 часов утра');
            break;
     case 8:
        alert('8 часов утра');
            break;
     case 9:
        alert('9 часов утра');
            break;
      case 10:
       alert('10 часов утра');
            break;
     case 11:
        alert('11 часов утра');
             break;
     case 12:
        alert('12 часа дня');
            break;
     case 13:
        alert('13 часа дня');
             break;
     case 14:
        alert('14 часа дня');
            break;
     case 15:
        alert('15 часа дня');
            break;
      case 16:
        alert('16 часа дня');
            break;
     case 17:
        alert('17 часа дня');
            break;
     case 18:
        alert('18 часов вечера');
            break;
     case 19:
        alert('19 часов вечера');
            break;
     case 20:
        alert('20 часов вечера');
            break;
     case 21:
        alert('21 часов вечера');
            break;
     case 22:
         alert('22 часов вечера');
            break;
     case 23:
        alert('23 часов вечера');
             break;
      case 24:
        alert('12 часов ночи');
            break;
}


// 3 вариант


var mikasa2 = +prompt('Введите первое число'); 
var eren1 = +prompt('Введите второе число'); 
var armin3 = +prompt('Введите третье число'); 

if(eren1 < mikasa2 && armin3 > mikasa2){
    alert ('Среднее число '+ mikasa2)
}else if (mikasa2 < eren1 && armin3 > eren1){
    alert('Среднее число ' + eren1)
}else if (eren1 < armin3 && mikasa2 > armin3){
    alert('Среднее число ' + armin3)
}     