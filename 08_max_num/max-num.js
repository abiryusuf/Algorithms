// Write code to return the largest number in the given array

var arr = [4,56,7,7,24,90];

var maxNum = function(arr){
  var max = [0];
for(var i = 0; i<arr.length; i++){
    var current = arr[i];

    if(current>max){
        max = current;
    }
}

};

