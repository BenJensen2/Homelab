// LeetCode #344: COMPLETE
var ReverseString = function(s){
  let len = s.length-1;
  for(i=0;i<len/2;i++){
    let temp=s[i];
    s[i] = s[len-i];
    s[len-i] = temp;
  }
  return s
}

var string1= ["h","e","l","l","o"]
console.log(ReverseString(string1))

var string2 = "leetcode"
// LeetCode #387: COMPLETE
// Optimize with While loops: Dojo
var firstUniqueChar = function(s){
  let freq1={};
  for(i=0;i<s.length;i++){
    if(!freq1.hasOwnProperty(s[i])){
      freq1[`${s[i]}`]=1;
    }
    else if (freq1.hasOwnProperty(s[i])) {
      freq1[`${s[i]}`]++;
    }
  }
  console.log(freq1)
  for(i=0;i<s.length;i++){
    if(freq1[s[i]]==1)
    return i
  }
  return -1;
}

console.log(firstUniqueChar(string2))