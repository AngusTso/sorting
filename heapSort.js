//HeapSort with max heap sorting from small to large num
class maxHeap{
    constructor(arr = []){
        if(arr){
            this.heap = this.heapify(arr);
        }
        else{
            this.heap = arr;
        }
    }

    swap(arr,i,j){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }

    heapify(arr){
        let result = []
        for(let i in arr){
            result.push(arr[i])
            if(i > 0){
                let parent = Math.floor((i - 1) / 2)
                while(result[parent] < result[i]){
                    this.swap(result,i,parent);
                    i = parent
                    parent = Math.floor((i - 1) / 2)
                }
            }
        }
        return result
    }

    removeElement(){
        let removed = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop();
        let current = 0
        let left = current * 2 + 1
        let right =  current * 2 + 2
        while(this.heap[current] < this.heap[left] || this.heap[current] < this.heap[right]){
            if(this.heap[left] < this.heap[right]){
                this.swap(this.heap,right,current)
                current = right
            }else{
                this.swap(this.heap,left,current)
                current = left
            }   
            left = current * 2 + 1
            right =  current * 2 + 2
        }
        return removed;
    }

    getLength(){
        return this.heap.length
    }
}

function heapSort(heap){
    let length = heap.getLength();
    let result = new Array(length)
    let i = 0;
    while(i < length){
        result[length - i - 1] = heap.removeElement()
        i++
    }
    return result;
}
const newHeap = new maxHeap([5,2,7,3,6,1,4])
console.log(heapSort(newHeap))