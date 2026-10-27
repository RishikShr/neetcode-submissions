class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
    const result = []
    for(let c of nums){
        if(!result.includes(c)){
            result.push(c)
        }
    }
    for( let i=0; i<result.length;i++){
        nums[i]= result[i]
    }
    return result.length
    }
}
