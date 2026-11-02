class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const groups = {};

  for (let word of strs) {
      const value = word.split('').sort().join("")
    if(!groups[value]){
      groups[value] = []
    }
    groups[value].push(word)
  }
return  Object.values(groups)
 
}
    
}
