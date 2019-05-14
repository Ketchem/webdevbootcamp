function average (arr){
    sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    sum = sum / arr.length;
    sum = Math.round(sum);
    
    console.log(sum);
};

average([90,98,89,100, 100, 86,94]);
average([40, 65, 77, 82, 80,54,73,63,95,49]);