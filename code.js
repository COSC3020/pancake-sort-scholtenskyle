function flip(array, n) {
    let beg = 0;
    let end = n - 1;
    while (beg < end){
        [array[beg], array[end]] = [array[end], array[beg]]; 
        beg = beg + 1;
        end = end - 1;
    }
}
// *Use only flip() here to manipulate the array*
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--){
        let maxSize = 0;
        for (let i = 0; i < (size + 1); i++){
            if (array[i] > array[maxSize]){
                maxSize = i;
            }
        }
        if (maxSize != (size - 1)){
            if (maxSize > 0){
                flip(array, maxSize + 1);
            }
            flip(array, size);
        }
    }
    return array;
}
