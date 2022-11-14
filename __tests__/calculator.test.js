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

  test('should return age and expectancy in Mercury years', () => {
    planetAge.mercury();
    expect(planetAge.earthAge).toEqual(75);
    expect(planetAge.expectancy).toEqual(304);
  });

  test('should return age and expectancy in Venus years', () => {
    planetAge.venus();
    expect(planetAge.earthAge).toEqual(29);
    expect(planetAge.expectancy).toEqual(118);
  });

  test('should return age and expectancy in Mars years', () => {
    planetAge.mars();
    expect(planetAge.earthAge).toEqual(10);
    expect(planetAge.expectancy).toEqual(39);
  });

  test('should return age and expectancy in Jupiter years', () => {
    planetAge.jupiter();
    expect(planetAge.earthAge).toEqual(2);
    expect(planetAge.expectancy).toEqual(6);
  });
  

  test('should return years left until life expectancy on Mercury', () => {
    planetAge.mercury();
    expect(planetAge.planetRemainder()).toEqual("You have 229 years left to live.")
  })


  test('should return years left until life expectancy on Venus', () => {
    planetAge.venus();
    expect(planetAge.planetRemainder()).toEqual("You have 89 years left to live.")
  })


  test('should return years left until life expectancy on Mars', () => {
    planetAge.mars();
    expect(planetAge.planetRemainder()).toEqual("You have 29 years left to live.")
  })


  test('should return years left until life expectancy on Jupiter', () => {
    planetAge.jupiter();
    expect(planetAge.planetRemainder()).toEqual("You have 4 years left to live.")
  })

  test('should return years lived past expectancy on Mercury', () => {
    let planet = new Age(75,73);
    planet.mercury();
    expect(planet.planetRemainder()).toEqual("You have lived 9 years past your life expectancy.")
  })

  test('should return years lived past expectancy on Venus', () => {
    let planet = new Age(75,73);
    planet.venus();
    expect(planet.planetRemainder()).toEqual("You have lived 3 years past your life expectancy.")
  })

  test('should return years lived past expectancy on Mars', () => {
    let planet = new Age(75,73);
    planet.mars();
    expect(planet.planetRemainder()).toEqual("You have lived 1 years past your life expectancy.")
  })

  test('should return years lived past expectancy on Jupiter', () => {
    let planet = new Age(90,73);
    planet.jupiter();
    expect(planet.planetRemainder()).toEqual("You have lived 2 years past your life expectancy.")
  })




  


});