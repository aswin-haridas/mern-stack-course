function combinationSum(candidates, target) {
    let result = [];
    
    function backtrack(remain, combo, start) {
        if (remain === 0) {
            result.push([...combo]);
            return;
        } else if (remain < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            combo.push(candidates[i]);
            backtrack(remain - candidates[i], combo, i);
            combo.pop();
        }
    }
    
    backtrack(target, [], 0);
    return result;
}

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
