学习笔记
1.高级动态规划
    一种分阶段求解决策略的数学思想
    1.1.分治
        分 + 治 =（递归解决较小问题，基本情况除外）+（从子问题的解构建原问题的解）
        传统上，正文中至少含有两个递归调用的例程叫做分治算法（只含一个递归调用的历程不是分治算法）。
        一般坚持子问题是不相交的。
        Q.最近点问题
        Q.选择问题
    1.2.动态规划
        用一个表代替递归
        （举例：fib可用递归简单实现，然以一个表代替递归，则更优一些）
        Q.矩阵陈发的顺序安排
        Q.最优二叉查找树
2.字符串算法
    字符串(String)是由数字、字母、下划线组成的一串字符。
    在程序设计中，字符串（string）为符号或数值的一个连续序列，如符号串（一串字符）或二进制数字串（一串二进制数字）。

    java、python等语言中，字符串（string）是不可变的，一旦创建就不能修改。
    Q.提问 其他语言呢？
    Q.提问 硬是要修改呢？

    2.1.字符串的基本操作
p1.不同路径 2 （ https://leetcode-cn.com/problems/unique-paths-ii/ ）这道题目的状态转移方程。
    一维：
        f[0] = obstacleGrid[0][0] == 0 ? 1 : 0;
        f[j] += f[j - 1];
    二维：
        dp[i][0] = 1;
        dp[0][j] = 1;
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];