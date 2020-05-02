// chai has a lot of stuff, let's make assert global,
var expect = chai.expect;

describe("add", function(){
 it("should add two numbers", function(){
     var num1 =20;
     var num2 = 10;

     var result = add(num1, num2);
     expect(result).to.eql(30)
 });
});

describe("subtract", function(){
    it("should subtract two number", function(){
        var num1 =60;
        var num2 =40;
        var result = subtract(num1, num2);
        expect(result).to.eql(20);
    });
});