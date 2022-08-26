let bingus = [12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213];

function sorter (arr) {
    let tempNum;
    for(let j = 0; j<arr.length; j++){
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                tempNum = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tempNum;
            }
        }
    }
}

sorter(bingus);

console.log(bingus);