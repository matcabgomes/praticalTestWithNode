exports.sum = (a,b) => {
    var soma = a + b;
    if(isNaN(soma)){
        return 'One of the values is not a number';
    }
    return soma;
}

exports.divide = (a, b) =>{
    var div = a/b;
    if(isNaN(div)){
        return 'One of the values is not a number';
    }
    return parseFloat(div.toFixed(2));
}
