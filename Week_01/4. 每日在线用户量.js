/**
 * input: number[]
 * output: number[]
 */
function dailyTemperatures(T) {
  var res = []
  for (i = 0; i < T.length ; i++) {
    if ( i == T.length ) {
      res.push(0)
      break;
    }
    var count = 0
   for (j = i + 1; j < T.length ; j++) {
     if ( T[i] < T[j] ) {
       count = (j-i)
       break;
     }
   }
   res.push(count)
  }
  return res;
}
