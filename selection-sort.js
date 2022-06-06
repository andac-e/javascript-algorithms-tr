// Selection Sort karşılaştırma temelli bir algoritmadır. Bu algoritma başlangıçta veri kaynağındaki ilk elemanı en küçük kabul eder, bu kabul geçicidir ve diğer elemanlar arasında daha küçükler varsa, en küçüğü ilk eleman ile yer değiştirir. Daha sonra indis bir sağa kaydırılarak bu işlem tüm veri kaynağı için tekrar eder.

// 50, 33, 1, 16, 4, 7, 21 dizisine bu algoritmayı uygularsak;
// dizinin ilk elemanı olan 50 kendisinden sonra gelen tüm elemanlar ile karşılaştırılır.
// 33, 50'den küçük olduğu için yer değiştirilir, bu dizideki en küçük elemanı bulana kadar devam ettirilir.
// ilk işlem sonunda 1 yeni en küçük elemandır ve dizinin başına geçer.
// ilk işlem sonunda dizinin yeni durumu şu şekilde olacaktır;
// 1, 33, 50, 16, 4, 7, 21

const selectionSort = (array) => {
  // döngümüzü başlatıyoruz ve ilk indisi açtığımız değişkene veriyoruz.
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    // iç döngümüzün amacı, döngü sırasında lowest değişkenine atadığımız değerin, iç döngüdeki değerden büyük olup olmadığını kontrol ediyoruz.
    // eğer büyükse; bu iki değeri yer değiştiriyoruz.
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    // iç döngü sona ulaştığında, en düşük değerin değişip değişmediğini kontrol ediyoruz.
    // eğer lowest'in başlangıç değeri iç döngü bittikten sonra değişmişse, bu değerin dizideki değerini değiştiriyoruz.
    if (lowest !== i) [array[i], array[lowest]] = [array[lowest], array[i]];
  }

  return array;
};

console.log(selectionSort([50, 33, 1, 16, 4, 7, 21]));
console.log(selectionSort(["c", "a", "z", "w", "x", "f"]));
