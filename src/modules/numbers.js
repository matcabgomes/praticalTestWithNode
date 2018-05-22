const number = require('./number');

exports.sum = (numbers) => {
    if(typeof(numbers) != 'object'){
        return 'The value is not a valid object';
    }
    total = 0;
    for(var i = 0; i < numbers.length; i++){
        total = number.sum(numbers[i], total);
    }
    if(isNaN(total)){
        return 'One of the values is not a number';
    }
    return total;
}

exports.average = (numbers) => {
    if(typeof(numbers) != 'object'){
        return 'The value is not a valid object';
    }
    var total = this.sum(numbers);
    var avg = number.divide(total, numbers.length);
    if(isNaN(avg)){
        return 'One of the values is not a number';
    }
    return parseFloat(avg.toFixed(2));
}