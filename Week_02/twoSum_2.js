/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let t_n_1 = null;
    for (i = 0; i < nums.length; i++) {
        t_n_1 = target - nums[i];
        if (arr[t_n_1] != null) {
            return [arr[t_n_1], i]
        }
        arr[nums[i]] = i;
        t_n_1 = null;
    }
    // return [0, 0];
    // return arr;

    // js的map该怎么用呢？
};