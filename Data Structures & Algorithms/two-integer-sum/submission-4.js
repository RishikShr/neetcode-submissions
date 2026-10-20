class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = {}
        let diff
        for(let i= 0; i<nums.length;i++){
           diff = target - nums[i]
           if(count[diff] !== undefined){
            return [count[diff],i]
           }
        count[nums[i]] = i
        }
        return []
    }
}
