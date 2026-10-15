class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count ={}
        if(s.length != t.length) return false
        for(let ch of s){
           count[ch] = (count[ch] || 0) + 1
        }
        for (let str2 of t){
            if(!count[str2]) return false
            count[str2]--
        }
        return true
    }
}
