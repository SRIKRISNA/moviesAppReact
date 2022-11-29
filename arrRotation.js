let N = 10, K = 3
arr = [1,2,3,4,5,6,7,8,9,10,11]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]
let newArr=[];
let lim = N-K
for(let i=0; i<lim; i++){
    newArr[i] = arr[K];
    K++;
}
let z=0;
for(let i=lim; i<N; i++){
    newArr[i] = arr[z];
    z++;
}
console.log(newArr)