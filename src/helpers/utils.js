const Utils = {
    decreaseValue: (value, factor = 1) => {
        const finalValue = value - factor;
        if (finalValue >= 0) {
            return finalValue;
        }
        return value;
    },
    increaseValue: (value, limit, factor = 1) => {
        const finalValue = value + factor;
        if (finalValue <= limit) {
            return finalValue;
        }
        return value;
    },
};

export default Utils;
