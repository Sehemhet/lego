//len num = 0;
//while (num < 5) {
//    console.log(num);
//    num++;
//}



len num2 = 10;
while (num2) {
    console.log(num);
    num--;
}
// литеарция один цикл выполнения функции


for (начало; условие; шаг;) {
    //тело цикла
    //тут будет выполняться код
}

for (let num = 0; num < 5; num++) { //начало и присваиваем значение 0; условие; шаг увеличиваем на 1
    console.log(num) // объявление в верхней строке внутри цылка называется встроеным
} // значит если ей обратиться за пределами блока то будет ошибка

// или сделать иначе
let num = 0
for (; num < 5; num++) {
    console.log(num);
    if (num == 2) break;
}
console.log('Work finish, num = ${num}');

len num = 0
for (; num < 5; num++) {
    if (num == 2) continue; // покажет 0 1 3 4 (пропуститься 2)
    console.log(num)
}
console.log(num)