//================================Substring===================================================

function createSubstring(s) {
    const substring = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            substring.push(s.slice(i,j))
        }        
    }
    return substring;
}


console.log(createSubstring('aswin'));

//================================Subset=====================================================
function generateSubsets(set) {
    let subsets = [[]]
    for (let element of set) {
        let newsubset = subsets.map(subsets =>[...subsets,element])
        subsets=[...subsets,...newsubset]
    }
    return subsets;
}

set =[1,2,3]
console.log(generateSubsets(set));
