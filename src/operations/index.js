export default {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '%': (prevValue, nextValue) => prevValue % nextValue,
  '=': (prevValue, nextValue) => nextValue
};
