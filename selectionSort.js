const array = [5,9,3,1,2,118,4,7,6,244,1111];

function swap(arr,unsortedIndex,minIndex,min){
    let temp = arr[unsortedIndex]
    arr[unsortedIndex] = min
    arr[minIndex] = temp
    unsortedIndex++
}
//My implementation
function selectionSort(arr){
    let unsortedIndex = 0
    while(unsortedIndex < arr.length - 1){
        let min = arr[unsortedIndex];
        let minIndex = unsortedIndex
        for(let i = unsortedIndex ; i < arr.length ; i++){
            if(arr[i] < min){
                min = arr[i]
                minIndex = i
            }
        }
        swap(arr,unsortedIndex,minIndex,min);
        unsortedIndex++;
    }
    return arr
}

console.log(selectionSort(array));