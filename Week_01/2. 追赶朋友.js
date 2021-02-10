/**
 * input: number, number
 * output: number
 */
function getStep(n) {
  return [n - 1, n + 1, n*2];
}
function findMinMinutes(n, k) {
  if (k <= n ) 
    return Math.abs(n - k);
  var t_x = 0, head = 0, tail = 0, flag = 0; // 标记到达 * 1
  var que = new Array(100001); // 队列
  var book = new Array(100001); // 到过的点，避免重复
  for(i = 1; i <= 100001; i++) {
    book[i] = 0;
  }
  // 初始化，将当前位置加入队列
  head = 1, tail = 1;
  book[n] = 1;
  que[tail] = [], que[tail].x = n, que[tail].f = 0, que[tail].s = 0;
  tail++;
  while (head < tail) {
    // 枚举三个方向
    var t_x_s = getStep(que[head].x)
    for (i = 0; i <= 2; i++) {
      t_x = t_x_s[i];
      // 判断是否越界，剪枝可以放在这里吗？
      if (t_x < 0 || t_x> 100001) {
        continue;
      }
      // 判断是否已经在路径中
      if (book[t_x] == 0) {
        book[t_x] = 1; // 标记为已走过
        que[tail] = [];
        que[tail].x = t_x;
        que[tail].f = head;
        que[tail].s = que[head].s + 1; // 插入新的点到队列中
        tail++;
      }
      // 如果到目标点了。停止扩展，人物介绍，退出循环
      if (t_x == k) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      break;
    }
    head++;
  }
  return que[tail - 1].s;
}
