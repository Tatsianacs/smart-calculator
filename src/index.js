/*
seeing that eval is used, check is required if integer
 */
class SmartCalculator {
    constructor(initialValue) {
        if(!Number.isInteger(initialValue)){
            throw "sorry but you can use only integers";
        }
        this.value = initialValue;
    }
    add(number) {
        if(!Number.isInteger(number)){
            throw "sorry but you can use only integers";
        }
        this.value = (this.value + '+' +  number);
        return this;
    }
    subtract(number) {
        if(!Number.isInteger(number)){
            throw "sorry but you can use only integers";
        }
        this.value = (this.value + '-' +  number);
        return this;
    }
    multiply(number) {
        if(!Number.isInteger(number)){
            throw "sorry but you can use only integers";
        }
        this.value = (this.value + '*' +  number);
        return this;
    }
    devide(number) {
        if(!Number.isInteger(number)){
            throw "sorry but you can use only integers";
        }
        this.value = (this.value + '/' +  number);
        return this;
    }
    pow(number) {
        this.value = (this.value + '**' +  number);
        return this;
    }
    valueOf(){
        var finalValue = eval(this.value);
        return finalValue;
    }
}

module.exports = SmartCalculator;