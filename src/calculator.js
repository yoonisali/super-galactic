export default class Age {
  constructor(earthAge, expectancy) {
    this.earthAge = earthAge;
    this.expectancy = expectancy;
    this.remainder = 0;
  }

  mercury() {
    this.earthAge = parseInt((this.earthAge / 0.24).toFixed());
    this.expectancy = parseInt((this.expectancy / 0.24).toFixed());
  }

  venus() {
    this.earthAge = parseInt((this.earthAge / 0.62).toFixed());
    this.expectancy = parseInt((this.expectancy / 0.62).toFixed());
  }

  mars() {
    this.earthAge = parseInt((this.earthAge / 1.88).toFixed());
    this.expectancy = parseInt((this.expectancy / 1.88).toFixed());
  }

  jupiter() {
    this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
    this.expectancy = parseInt((this.expectancy / 11.86).toFixed());
  }

  // planetRemainder() {
  //   this.remainder = this.expectancy - this.earthAge;
  //   return this.remainder;
  // }
}
