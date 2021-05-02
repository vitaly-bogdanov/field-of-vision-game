const rangeCreatorHelper = (start: number, end: number, step: number = 1) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (i % step === 0) {
            arr.push(i);
        }
    }
    return arr;
}

export default rangeCreatorHelper;