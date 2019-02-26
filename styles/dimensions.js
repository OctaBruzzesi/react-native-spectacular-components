import { isIOS } from '../helpers/RNHelper';

const dimensions = {
    box: {
        thin: 1,
        middle: 5,
        thick: 10,
        long: 17,
        veryLong: 33
    },
    barHeight: isIOS() ? 64 : 56,
    dataInput: 49,
    square: {
        thin: {
            height: 20,
            width: 20
        },
        middle: {
            height: 30,
            width: 30
        },
        large: {
            height: 75,
            width: 75
        } 
    }
};

export { dimensions };
