// Problem statement
// You are given an array 'a' of size 'n' and an integer 'k'.

// Find the length of the longest subarray of 'a' whose sum is equal to 'k'.

// Example :
// Input: ‘n’ = 7 ‘k’ = 3
// ‘a’ = [1, 2, 3, 1, 1, 1, 1]

// Output: 3

// Explanation: Subarrays whose sum = ‘3’ are:

// [1, 2], [3], [1, 1, 1] and [1, 1, 1]

// Here, the length of the longest subarray is 3, which is our final answer.

export default (input, kth) => {
    const arr = input ? input : [1, 2, 3, 1, 1, 1, 1];
    const k = kth ? kth : 3;

    let i = 0, j = 0;
    let currentSum = 0, ans = 0;

    while(j < arr.length){
        
        currentSum += arr[j];
        while(currentSum > k && i <= j){
            currentSum -= arr[i];
            i++;
        }
        if(currentSum == k) {
            ans = Math.max(ans, (j - i + 1));
        }
        j++;
    }
function majorityElement(nums) {
    let candidate1 = null;
    let count1 = 0;
    let candidate2 = null;
    let count2 = 0;

    // Step 1: Find the candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Count the occurrences of candidates
    count1 = 0;
    count2 = 0;

    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    // Step 3: Check if candidates appear more than ⌊ n/3 ⌋ times
    const result = [];
    const n = nums.length;

    if (count1 > n / 3) {
        result.push(candidate1);
    }

    if (count2 > n / 3 && candidate1 !== candidate2) {
        result.push(candidate2);
    }

    return result;
}

// Example usage:
const nums = [3, 3, 3, 5, 5, 5, 1, 2, 2];
const result = majorityElement(nums);
console.log(result); // Output: [3, 5]
    console.log(ans);

};
