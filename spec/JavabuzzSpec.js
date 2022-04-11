describe('Javabuzz', function() {
	let javabuzz;

	beforeEach(function() {
    javabuzz = new Javabuzz();
  });

	describe('knows when a number is', function() {
		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});
	});

	describe('knows when a number is NOT', function() {
		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});
	});

	describe('knows when a number is', function() {
		it('divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(5)).toBe(true);
		});
	});
	
	describe('knows when a number is NOT', function() {
		it('divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(6)).toBe(false);
		});
	});

	describe('knows when a number is', function() {
		it('divisible by 3 and 5', function() {
			expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
		});
	});

	describe('knows when a number is NOT', function() {
		it('divisible by 3 and 5', function() {
			expect(javabuzz.isDivisibleByThreeAndFive(5)).toBe(false);
		});
	});

	describe('plays FizzBuzz', function() {
		it('divisible by 3', function() {
			expect(javabuzz.play(3)).toEqual('Java');
		});
	});

	describe('plays FizzBuzz', function() {
		it('divisible by 5', function() {
			expect(javabuzz.play(10)).toEqual('Buzz');
		});
	});

	describe('plays FizzBuzz', function() {
		it('divisible by 3 and 5', function() {
			expect(javabuzz.play(15)).toEqual('JavaBuzz');
		});
	});

	describe('plays FizzBuzz', function() {
		it('NOT divisible by 3 or 5', function() {
			expect(javabuzz.play(14)).toEqual(14);
		});
	});

});
