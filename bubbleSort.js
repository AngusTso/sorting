const array = [5,9,3,1,2,8,4,7,6];

//My implementation
function bubbleSort(arr){
    for(let i = 0 ; i < arr.length - 1 ; i++){
        for(let j = arr.length - 1 ; j >= i ; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort(array));