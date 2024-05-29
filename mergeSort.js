let array = [24,6,5,33,116,518,2,1]

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.ceil(arr.length / 2);
    let leftArray = arr.slice(0,mid)
    let rightArray = arr.slice(mid,arr.length)
    console.log("left" , leftArray);
    console.log("right", rightArray)
    // console.log("left" , leftArray);
    // console.log("right", rightArray)
    mergeSort(leftArray)
    mergeSort(rightArray)
    
    let leftStart = 0;
    let rightStart = 0;
    let mergeIndex = 0;

    while(leftStart < leftArray.length && rightStart < rightArray.length){
        if(leftArray[leftStart] <= rightArray[rightStart]){
            arr[mergeIndex] = leftArray[leftStart];
            leftStart++;
        }else{
            arr[mergeIndex] = rightArray[rightStart];
            rightStart++;
        }
        mergeIndex++
    }

    while(leftStart < leftArray.length){
        arr[mergeIndex] = leftArray[leftStart];
        leftStart++;
        mergeIndex++;
    }

    while(rightStart < rightArray.length){
        arr[mergeIndex] = rightArray[rightStart];
        rightStart++;
        mergeIndex++;
    }
    console.log("Merged result: ", arr)
    return arr
}

console.log(mergeSort(array));