/*
seeing that eval is used, check is required if integer
 */
class SmartCalculator {
    constructor(initialValue) {
        this.checkInput(initialValue);
        this.value = initialValue;
    }
    checkInput(number){
        if(!Number.isInteger(number)){
            throw "sorry but you can use only integers";
        }
    }
    add(number) {
        this.checkInput(number);
        this.value = (this.value + '+' +  number);
        return this;
    }
    subtract(number) {
        this.checkInput(number);
        this.value = (this.value + '-' +  number);
        return this;
    }
    multiply(number) {
        this.checkInput(number);
        this.value = (this.value + '*' +  number);
        return this;
    }
    devide(number) {
        this.checkInput(number);
        this.value = (this.value + '/' +  number);
        return this;
    }
    pow(number) {
        this.checkInput(number);
        this.value = (this.value + '**' +  number);
        return this;
    }
    valueOf(){
        var finalValue = eval(this.value);
        return finalValue;
    }
}

module.exports = SmartCalculator;