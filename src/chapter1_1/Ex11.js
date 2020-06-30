// 1.1.11　编写一段代码，打印出一个二维布尔数组的内容。其中，使用 * 表示真，空格表示假。打印出
// 行号和列号。

const arr = [
  [true, false, true],
  [true, false, true],
  [true, false, true],
];

arr.forEach((el, row) => {
  el.forEach((el, col) => {
    console.log(`row:${row + 1},col:${col + 1},value:${el ? "*" : " "}`);
  });
});
