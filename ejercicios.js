

//  1 SUMA DE RESISTENCIAS EN SERIE 


let resistance = [-1,5,6,3];
let valor = 0;
for(var i=0; i < resistance.length;i++){
valor+= Math.abs(resistance[i]);
}
console.log(valor);



let resistance2 = [14, 3.5, 6];
let valor2 = 0;
for( var i=0; i < resistance2.length;i++){
valor2+= resistance2[i];
}
console.log(valor2);



let resistance3 = [8, 15, 100];
let valor3 = 0;
for( var i=0; i < resistance3.length;i++){
valor3+= resistance3[i];
}
console.log(valor3);



//      FER
/** 
const res1 = [-1, 5, 6, 3];
const res2 = [14, 3.5, 6];
const res3 =[8,15, 100];

function sumResistance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res =res + e));
    console.log(`${res} ohms`);
}
sumResistance(res3)
*/

/** 
const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel" ];
const member3 = ["Harry", "Ron", "Hermione"];

function secretName(arr) {
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    console.log(res.sort());
}
secretName(member1);
secretName(member2);
secretName(member3);
*/

/** 
const n =4;
const n2 =10;

function numDiv(num) {
    let res = [];
    const half = num/2;
    res.push(half);
    res.push(half);
    return res;
}

console.log(numDiv(n2));
*/


/** 
const users = ["mockIng99", "JoeyPunch", "glassedFer", "hello1"];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if(count ===1) {
        res = `${arr[0]} is online`;
    } else if(count ===2) {
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count -2} more are online`;
}
return res;
}

console.log(displayUsers(users));
*/
//           TERMINA LO DE FER 



//  2 DIVIDIDO EN MITADES 


const numberSplit = (num) => {
    if (num === undefined) {
        return "El parámetro no se encuentra"
    } else { 
let a = Math.floor(num / 2);
let b = num - a;
let c = [];   
c.push(a, b);
return c;
}
};

console.log(numberSplit(10));
console.log(numberSplit(4));




// 3 SOCIEDAD SECRETA






// 5 MATRIZ MULTIPLOS


const arrayofMultiples =(num, long) => {
    let arr = [];
    let x=1;
    for (let i =1; i <= long; i++) {
        arr.push(num * x);
        x++
    }
    return arr;
};

console.log(arrayofMultiples(15, 65));




// 6 DOMINIO POSITIVO EN ARRAY


const isPositiveDominant = (arr) => {
let a = 0;
let b = 0;


for (let i = 1; i<=  arr.lenght; i++) {
    if (arr [i- 1] > 0 && i > 1 && arr[i- 1] !== arr[i] && arr [i+ 1] !== arr[i- 1]) {
        a += 1;
        console.log(a);
    }
        if (arr[i] < 0 && arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] && arr[i + 1] !== arr[i - 1]) {
          b+= 1;
          console.log(b);
        }
      }
      if (a > b) {
        return true;
      } else return false;
    };


console.log(isPositiveDominant([-1, -3, -5, 4, 6767]));




// 7 PROMEDIO ANTÍPODA


let numeros = [1, 2, 3, 5, 22, 6];

console.log(numeros.slice(0,3));
console.log(numeros.slice(3, 6)); 

const reversed = numeros.slice(3,6).reverse();

console.log('reversed:', reversed);

let nuevo = numeros.slice(0,3).map((x,i) => (x+ reversed[i]));

console.log(nuevo);

let divisor = 2;
let arreglo= nuevo;
let r2= [];

arreglo.forEach(function(elemento, indice) {
r2[indice]= elemento/divisor
});

console.log(r2);
//

