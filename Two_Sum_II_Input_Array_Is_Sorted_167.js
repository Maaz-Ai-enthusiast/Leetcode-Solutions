/*Non-Decreasing Order:
In a non-decreasing order, each element is not smaller than the previous one.
 This means that the sequence can have repeated elements, but it will never decrease. For example, [1, 2, 2, 3, 4] is in non-decreasing order because each element is either greater than or equal to the previous one.

Ascending Order:
In an ascending order, each element is strictly greater than the previous one.
 This means that there are no repeated elements and the sequence is strictly increasing. For example, [1, 2, 3, 4, 5] is in ascending order because each element is greater than the previous one.
 */

 var twoSum = function (numbers, target) {
    // Initialize two pointers, one at the start (left) and one at the end (right) of the array
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the left pointer is less than the right pointer
    while (left < right) {

        // Initialize sum to 0 and then calculate the sum of elements at the left and right pointers
        let sum = 0;
        sum = numbers[left] + numbers[right];

        // If the sum equals the target, return the indices (1-based)
        if (sum === target) {
            return [left + 1, right + 1];
        }
        // If the sum is greater than the target, move the right pointer to the left
        else if (sum > target) {
            right--;
        }
        // If the sum is less than the target, move the left pointer to the right
        else {
            left++;
        }
    }
};

console.log(twoSum([1, 2, 3],4));