class Javabuzz {

	_isDivisibleBy(divisor, number) {
    return (number % divisor === 0);
  }

	isDivisibleByThree(number) {
		return this._isDivisibleBy(number, 3);
	}

	isDivisibleByFive(number) {
		return (number % 5 === 0);
	}

	isDivisibleByThreeAndFive(number) {
		return (number % 3 === 0 && number % 5 === 0 );
	}

	play(number) {
		if (this._isDivisibleBy(15, number)) {
				return 'JavaBuzz';
		} else if (this._isDivisibleBy(3, number)) {
				return 'Java';
		} else if (this._isDivisibleBy(5, number)) {
				return 'Buzz';
		} else {
			return number;
		}
	}
}