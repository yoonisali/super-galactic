import Age from "../src/calculator.js";

describe('Age', () => {
  let age;
  beforeEach( () => {
    age = new Age(18, 73);
  });

  test('should show an Age constructor with properties', () => {
    expect(age.earth).toEqual(18);
    expect(age.expectancy).toEqual(73);
  });
});