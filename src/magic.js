const magic = (...numbers) => {
  const sum = numbers.reduce((acc, num) => num + acc, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};
export default magic;
