/**
 * input: number[][], number[]
 * output: number[]
 */
function filterRestaurants(restaurants, filters) {
  var res = [];
  // 加入 res
  for (i = 0; i < restaurants.length ; i++) {
    if (filters[0] == 0 || filters[0] == 1 && restaurants[i][2] == 1) {
       if (filters[1] >= restaurants[i][3]) {
         if (filters[2] >= restaurants[i][4]) {
           res.push(restaurants[i][0]); // 如何在加入的时候排好顺序呢？
         }
       }
    }
   }
  // res 排序
  res.sort(function(a,b){
    if(restaurants[b][1] == restaurants[a][1])
      return (restaurants[b][0] - restaurants[a][0])
    return (restaurants[b][1] - restaurants[a][1])
  });
  return res;
}
