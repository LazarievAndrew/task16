// Array compress
// Написать программу, которая сжимает серии массива, состоящего из единиц и нулей
//  по следующему принципу, например:

// массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1] преобразуется в [4,7,2,4]
// массив [0,0,1,1,1,1,0,1,1,1] преобразуется в [2,4,1,3]

var arr1 = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];
var arr2 = [0,0,1,1,1,1,0,1,1,1];

function compressArray(x){

    var a = [];
    var count = 0;

    var b = x.reduce (function (some, item){
        
        if (some === item){
            count++;
            return some;
        } else {
            a.push(count);
            count = 1;
            return item;
        }

    }, x[0]);

    a.push(count);

    return a;
}
alert (compressArray(arr1));
alert (compressArray(arr2));