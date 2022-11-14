export default class Age {
  constructor(earthAge, expectancy) {
    this.earthAge = earthAge;
    this.expectancy = expectancy;
    this.remainder = this.expectancy - this.earthAge;
  }

  mercury() {
    this.earthAge = parseInt((this.earthAge / 0.24).toFixed());
    return this.earthAge;
  }

  mercuryRemainder() {
    this.earthAge = parseInt((this.expectancy / 0.24).toFixed());
    return this.earthAge; 
  }
  
  venus() {
    this.earthAge = parseInt((this.earthAge / 0.62).toFixed());
    return this.earthAge;
  }

  venusRemainder() {
    this.earthAge = parseInt((this.expectancy / 0.62).toFixed());
    return this.earthAge; 
  }

  mars() {
    this.earthAge = parseInt((this.earthAge / 1.88).toFixed());
    return this.earthAge;
  }

  jupiter() {
    this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
    return this.earthAge;
  }
}
