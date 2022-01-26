
const shuffle = (arr) => {
    const result = [];
    for (let i = arr.length-1; i >= 0; i--) {
        const r = Math.floor(Math.random()*(i+1));
        for(let j = 0, k = 0; j <= arr.length-1; j++) {
        if(result[j] === undefined) {
            if(k === r) {
                result[j] = arr[i];
                break;
                }
                k++;
            }
        }
    }
    
    return result
}


export { shuffle }