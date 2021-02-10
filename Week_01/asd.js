/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height == null || height.length == 0) {
        return 0;
    }
    let res = 0, 
    size = height.length, 
    temp = 0, 
    max = [0, 0], 
    min = [0, 0] // key , value
    for (let i = 0; i <= size; i++) {
        if (i > size - 1) { break; }
        if (temp == 0 && max[1] <= height[i]) {
            max[0] = i;
            max[1] = height[i];
        }
        if (temp > 0 && i > size - 1 || height[i + 1] < height[i]) {
            let limit = height[i - 1];
            console.log('-----1.temp:'+temp+', res:'+res)
            temp = temp - (max[1] - limit) * (i - max[0]);
            res+=temp
            temp = 0
            max[0] = i
            max[1] = height[i]
            console.log('-----1.temp:'+temp+', res:'+res)
        }
        if (temp > 0 && height[i] > max[1]) {
            console.log('-----2.temp:'+temp+', res:'+res)
            res+=temp
            temp = 0
            max[0] = i
            max[1] = height[i]
            console.log('-----2.temp:'+temp+', res:'+res)
        }
        temp+=(max[1] - height[i])
        console.log('i:'+i+', temp:'+temp+', max:'+max)
    }
    return res
};

console.log(trap([3,1,0,2,3]))