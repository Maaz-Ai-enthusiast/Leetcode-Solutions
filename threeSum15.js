var threeSum = function(nums) {

    nums.sort((a, b) => a - b); // Sort the array in ascending order
 
   let res = [];
 
   for (let i = 0; i < nums.length; i++) {
     const num = nums[i];
 
     // Skip duplicates for the first element
     if (i > 0 && num === nums[i - 1]) {
       continue;
     }
 
     let left = i + 1;
     let right = nums.length - 1;
 
     while (left < right) {
       const sum = num + nums[left] + nums[right];
 
       if (sum < 0)   
  {
         left++;
       } else if (sum > 0) {
         right--;
       } else {
         res.push([num, nums[left], nums[right]]);
         left++;
 
         // Skip duplicates for the second element
         while (nums[left] === nums[left - 1] && left < right) {
           left++;
         }
       }
     }
   }
 
   return res;
 
 };