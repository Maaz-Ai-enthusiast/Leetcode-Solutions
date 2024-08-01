var rotate = function(nums, k) {


    // Normalize k to handle cases where k > nums.length
    k = k % nums.length;
    if (k === 0) return;

    // Reverse the entire array
    nums.reverse();

    // Reverse the first k elements
    let start = 0;
    let end = k - 1;
    while (start < end) {
        // Swap elements at start and end
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }

    // Reverse the remaining elements
     start = k;
    end = nums.length - 1;
    while (start < end) {
        // Swap elements at start and end
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}




















// var rotate = function(nums, k) {
   
// let j=k-1;
//     nums.reverse();
//    for(let i=0;i<k;i++){
//     nums[j]=nums[j];
//     j--;
//    }
//    let z=nums.length-1;
//    for(let i=k;i<nums.length;i++){
//     nums[i]=nums[z];
//     z--;
//    }
// }
// (rotate([1,2,3,4,5,6,7],3));











// var rotate = function(nums, k) {
//     let j=nums.length-1;
//   for(let i=0;i<k;i++){
//      nums.unshift(nums[j]);
//      nums.pop();
//      j--;
//   }
// return nums;
// };
// console.log(rotate([1,2,3,4,5,6,7],3));