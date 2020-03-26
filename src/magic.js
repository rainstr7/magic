export default function magic(...numbers) {
  const sum = numbers.reduce((acc, num) => num + acc, 0);
  function inner(...rest) {
    return magic(sum, ...rest);
  }
  inner.valueOf = () => sum;
  return inner;
}
