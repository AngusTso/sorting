const array = [5,1,4,9,6,3,2];

//My implementation
function quickSort(arr){
    if(arr.length <= 1) return arr
    
    const pivot = arr[0]
    const leftArray = [];
    const rightArray = [];

    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    return [...quickSort(leftArray) , pivot , ...quickSort(rightArray)]
}


console.log(quickSort(array));