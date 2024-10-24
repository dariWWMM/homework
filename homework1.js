let a = 'number'+ 3 + 3; 
console.log (a);  // (відповідь: number33) - js виявляє що 'number' це строка і перетворює всі наступне на строки, як результат всі значення об'єднуються як строки.

let b = null + 3;
console.log (b); // (відповідь: 3) - js намагається null у число, тому при виконанні арифметичної дії null стає 0, 0 + 3 = 3

let c = 5 && "qwerty";
console.log(c); // (відповідь: qwerty) - оператор && повертає перше хибне значення, у прикладі обидва значення істинні тому && повертає останнє істинне, якщо істинні всі

let d = +'40' + +'2' + "hillel";
console.log (d); // (відповідь: 42hillel) - оператор + перед строками 40 та 2 перетворює їх на числа, тому отриманий вираз 42+hillel, і викликає конкатенацію (об'єднання)

let aa = '10' - 5 === 6;
console.log (aa); //(відповідь: false) - js бачить строку '10' як число, 10-5=5,оператор === визначає що 5 і 6 це різні значення, тому відповідь false  

let ab = true + false;
console.log (ab); // (відповідь: 1) - js перетворив true та false на 1 та 0, тому відповідь 1.

let ad = '4px' - 3;
console.log (ad); // (відповідь: NaN) - js не може перетворити '4px'в коректне число, тому відповідь Not a Number.

let ac = '4' - 3; 
console.log (ac); // (відповідь: 1) - js перевторив '4' в цифру, тому 4-3=1.

let ba = '6' + 3 ** 0; 
console.log (ba); // (відповідь: 61) - число піднесене до нуьового степеню за допомогою ** завжди = 1, тому при конкатенації '6'+1 маємо строкову відповідь 61

let bb = 12 / '6';
console.log(bb); // (відповідь: 2) - js бачить рядок '6' як число тому 12 поділене на 6 = 2.

let bc = '10' + (5 === 6);
console.log (bc); // (відповідь: 10false) - оператор === визначає що 5 і 6 це різні значення, тому відповідь false при конкатенації з строкою '10' утворює 10false

let bd = null == '';
console.log (bd); // (відповідь: false) - null не дорівнює жодному рядку, включаючи порожній рядок.

let ca = 3 ** (9 / 3);
console.log(ca); // (відповідь: 27) - після виконання ділення в дужках отримуємо рез. 3 який підносимо до 3 степеня (оператор **) і отримуємо 27.

let cb = !!'false' == !!'true';
console.log (cb); // (відповідь: true) - заперечення істинного значення двічі створює вираз true == true.

let cc = 0 || '0' && 1;
console.log(cc); // (відповідь: 1) - повертається 1 тому що || повертає останнє істинне значення.

let cd = (+null == false) < 1;
console.log(cd); // (відповідь: false) - +null це 0, з виразу в дужках отримуємо true, тому під час порівняння true<1 те саме що 1<1, 1 не є меншим за 1.

let da = false && true || true;
console.log(da); // (відповідь: true) - && має вищий пріоритет і повертає false бо це хибне значення, оператор || повертає перше істинне значення тому відповідь true

let db = false && (false || true);
console.log(db); // (відповідь: false) - || повертає перше істинне тому з виразу в дужках отримуємо true, && повертає false так як одна з операнд хибна

let dc = (+null == false) < 1 ** 5;
console.log(dc); // (відповідь: false) - так як 0 == 0 це true у першій частині виразу, 1 в 5 степені це 1, а true при петеворенні 1<1 маємо відповідь false
