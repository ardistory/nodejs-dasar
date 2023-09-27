//membuat array
const myArr = [1, 2, 3];
const emptyArray = [4, 5, 6];

//penggabungan array
const arrayBaru = myArr.concat(emptyArray);

//menjadikan setiap nilai array menjadi 'value'
arrayBaru.forEach((value) => {
});

//membuat array baru dan bisa modifikasi dari setiap 'value'
const arrayBaruLagi = arrayBaru.map((value) => value * value);

console.log(arrayBaruLagi);