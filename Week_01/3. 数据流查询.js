/**
 * input: number[][], number
 * output: number[]
 */
function findTopKQuery(orders, k) {
  var res = [], time_count = 0;
  while (res.length < k) {
    time_count++;
    for (i = 0; i < orders.length; i++) {
      // 开始时间
      if (time_count * 100 == orders[i][1] || (time_count * 100 - orders[i][1]) % orders[i][2] == 0) {
        res.push(orders[i][0]);
        if (res.length >= k) {
          break;
        }
      }
    }
  }
  return res;
  /*
  // 最大公约数
  var base_count = 0;
  var while_count = 0;
  // 循环
  var res = [];
  while (base_count <= k) {
    while_count++;
    for(j = 0; j < orders.length; j++){
        // begin time 时 +1
        // 时间 - begin time 的余数 == 0 时 +1
        if ((100 * while_count) ==  orders[j][1] || (100 * while_count) >  orders[j][1] && (100 * while_count - orders[j][1]) % orders[j][2] == 0) {
          res.push(orders[j][0]);
          base_count++
          if (base_count >= k) 
            return res;
        }
     }
  }
  return res;
  */
}
