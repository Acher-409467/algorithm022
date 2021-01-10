class Solution {
    // 柠檬水找零
    // 多加几种不太有规律的面值就没办法了。感觉还是枚举出来再判断？
    public boolean lemonadeChange(int[] bills) {
        int five= 0, ten = 0;
        for (int bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five > 0) {
                    five--;
                    ten++;
                }
                else {
                    return false;
                }
            } else {
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}