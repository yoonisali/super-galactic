import Age from "../src/calculator.js";

describe('Age', () => {
  let planetAge;
  beforeEach( () => {
    planetAge = new Age(18, 73);
  });

  test('should show an Age constructor with properties', () => {
    expect(planetAge.earthAge).toEqual(18);
    expect(planetAge.expectancy).toEqual(73);
  });

  test('should return Age in Mercury years', () => {
    expect(planetAge.mercury()).toEqual(75);
  });

  test('should return Age in Venus years', () => {
    expect(planetAge.venus()).toEqual(29);
  });

  test('should return Age in Mars years', () => {
    expect(planetAge.mars()).toEqual(10);
  });

  test('should return Age in Jupiter years', () => {
    expect(planetAge.jupiter()).toEqual(2);
  });

  test('should return life expectancy in Mercury years', () => {
    expect(planetAge.mercuryRemainder()).toEqual(304)
  })

  test('should return life expectancy in Mercury years', () => {
    expect(planetAge.venusRemainder()).toEqual(118)
  })

  


});