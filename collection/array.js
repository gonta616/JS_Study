// 配列を生成
let family = ['わい', '弟', '妹', 'おとん', 'おかん'];
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



// 配列処理
console.log('-------------- Start: map --------------');
newFamily = family.map((person) => {
  return person === 'わい' ? 'おれ' : 'わい'
})
console.log(family);
console.log(newFamily);
console.log('-------------- End: map --------------');

// 複製
console.log('-------------- Start: from --------------');
newFamily = Array.from(family)
console.log(family);
console.log(newFamily);
console.log('newFamilyを操作。ディープコピーなので');
newFamily[0] = 'ぼく';
console.log(family);
console.log(newFamily);
console.log('-------------- End: map --------------');
