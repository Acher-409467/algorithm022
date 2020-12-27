/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }
    // 两次循环
    let arr = [], t_s, t_t;
    for (i = 0; i < s.length; i ++) {
        t_s = s[i].charCodeAt(0);
        t_t = t[i].charCodeAt(0);
        arr[t_s] = (arr[t_s] && arr[t_s] || 0) + 1;
        arr[t_t] = (arr[t_t] && arr[t_t] || 0) - 1;
                                                                                                                                                                                                      
    }
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] && arr[i] != 0){
            return false;
        }
    }
    return true;
};