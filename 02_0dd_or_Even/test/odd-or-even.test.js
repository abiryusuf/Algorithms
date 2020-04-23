var expect = chai.expect;

describe("oddEven", function(){
    it('should return the string "odd" if a number IS NOT evenly divisible by 2', function(){
        var num =777;

   var result= oddEven(num);
   expect(result).to.eql("odd");
    });
})