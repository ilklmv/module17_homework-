import {getPercents} from "./index.js"

describe('getPercents function', () => {
  it('должно возвратить 60 когда процент 20 и число 200', () => {
    const percent = 20;
    const number = 200;
    const expectedResult = 60;

    const result = getPercents(percent, number);

    expect(result).toBe(expectedResult);
  });

  it('возвращает значение, отличное от 60, когда процент не 20 и число 200', () => {
    const percent = 30;
    const number = 200;

    const result = getPercents(percent, number);

    expect(result).not.toBe(60);
  });

  it('возврат 0, когда процент равен 0 ', () => {
    const result = getPercents(0, 200);
    expect(result).toBe(0);
  });

  it('должно возвращать 200 когда процент 100', () => {
    const result = getPercents(100, 200);
    expect(result).toBe(200);
  });
});
