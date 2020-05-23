// 配列を生成
let family = ['わい', '弟', '妹', 'おとん', 'おかん', ['嫁', '義妹']];
let newFamily = [];

// 要素取得
const getElement = (array) => {
  console.log(array[0]);
  console.log(array[family.length - 1]);  
}

// forloop
const forLoop = (array) => {
  for (let i=0; i<array.length; i++) {
    console.log(array[i]);
  }  
}

// forOfLoop
const forOfLoop = (array) => {
  for (let person of array) {
    console.log(person);
  }  
}

// forEach
const forEachLoop = (array) => {
  newFamily = array.forEach(person => {
    person + '1'
  });
  console.log(array);
  console.log(newFamily);
}
