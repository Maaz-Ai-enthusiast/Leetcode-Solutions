var canPlaceFlowers = function (flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0];
   for (let i = 0; i < flowerbed.length; i++) {
       if ((n > 0) && (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] ==0)){
              
                flowerbed[i] = 1;
               n -= 1
       }
   }
   if (n == 0) {
       return true
   }
   else { 
       return false
        }
};