class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        // 排序 比较
        char[] str1 = s.toCharArray(); // toCharArray() 方法将字符串转换为字符数组。
        char[] str2 = t.toCharArray();
        Arrays.sort(str1);
        Arrays.sort(str2);
        return Arrays.equals(str1, str2);
    }
}
/*
var isAnagram = function(s, t) {
    // 在 join()里面添加""，变成join(""),可以将字符无缝添加成一个完整的单词
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('') // 居然只有一句...
};
*/