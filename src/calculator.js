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
  
};