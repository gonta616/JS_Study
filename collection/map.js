const map = new Map();
console.log('-----------Mapの検証 開始---------------');
console.log('-----------Map 追加/削除---------------');
console.log(map);
map.set('key1', 'value1');
console.log(map);
map.set('key2', 'value2');
console.log(map);
map.delete('key1');
console.log(map);
console.log('-----------Map ループ---------------');

for (entry of map.entries()) {
  console.log(entry);
}

console.log('-----------Mapの検証 終了---------------');