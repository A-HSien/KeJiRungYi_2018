
export class CommonUtility {

    static getRandomBoolean() {
        return Math.random() >= 0.5;
    };


    static getRandomNumberInRange(min: number, max: number, digits: number) {
        const rate = Math.pow(10, digits);
        return CommonUtility.getRandomIntInRange(min * rate, max * rate) / rate;
    };

    static getRandomIntInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    static getRandomInt(digits?: number) {
        const r = CommonUtility.getRandomBoolean() ? 1 : -1;
        return CommonUtility.getRandomNegativeInt(digits) * r;
    };

    static getRandomNegativeInt(digits?: number) {
        return CommonUtility.getRandomNegativeNumber(digits);
    };

    static getRandomNumber(digitsOnInt?: number, digitsOnFloat?: number) {
        const r = CommonUtility.getRandomBoolean() ? 1 : -1;
        return CommonUtility.getRandomNegativeNumber(digitsOnInt, digitsOnFloat) * r;
    };

    static getRandomNegativeNumber(digitsOnInt?: number, digitsOnFloat?: number) {
        digitsOnInt = digitsOnInt || 1;
        digitsOnFloat = digitsOnFloat || 0
        let result = Math.round(Math.random() * Math.pow(10, digitsOnInt + digitsOnFloat));
        if (digitsOnFloat !== 0) result = result / Math.pow(10, digitsOnFloat);
        return result;
    };


    static sort<T>(array: T[], func: (e: T) => number) {
        array.sort((a, b) => {
            return func(a) - func(b);
        });
        return array;
    };

    static shuffle<T>(array: T[]) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    static createArray<T>(length: number) {
        const array = Array.apply(null, { length: length });
        return array as T[];
    };
};