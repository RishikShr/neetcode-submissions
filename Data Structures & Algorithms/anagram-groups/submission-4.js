class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let count = {}
        for(let word of strs){
            const counts = Array(26).fill(0);
            for(let chars of word){
                const index = chars.charCodeAt(0)-97
                counts[index]=counts[index ] +1
                
             }
             const key = counts.join("#");
             if(!count[key]){
                count[key]=[]
             }
             count[key].push(word)
        }
     return    Object.values(count)
    }
}
