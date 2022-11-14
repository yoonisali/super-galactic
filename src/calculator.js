export default class Age {
  constructor(earth, expectancy) {
    this.earth = earth;
    this.expectancy = expectancy;
  }

  mercury() {
    this.earth = parseInt((this.earth / .24).toFixed());
    return this.earth;
  }

  venus() {
    this.earth = parseInt((this.earth / .62).toFixed());
    return this.earth;
  }

  mars() {
    this.earth = parseInt((this.earth / 1.88).toFixed());
    return this.earth;
  }

  jupiter() {
    this.earth = parseInt((this.earth / 11.86).toFixed());
    return this.earth;
  }
  
};