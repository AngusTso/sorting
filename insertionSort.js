const array = [5,4,1,9,6,3,2];

//My implementation
function insertionSort(arr){
    for(let i = 1 ; i < arr.length; i++){
        let j = i;
        while(arr[j] < arr[j - 1] && j > 0){
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr
}


console.log(insertionSort(array));