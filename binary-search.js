// Binary Search 'Parçala ve Fethet (Divide and Conquer)' yaklaşımı ile çalışan bir arama algoritmasıdır. Sıralı bir veri kaynağında herhangi bir elemanı aramak için kullanılır.

const binarySearch = (sortedArray, key) => {
  // arama yapılan dizinin başlangıç ve bitiş değerlerini takip etmek için 2 değişken tanımladık.
  let low = 0;
  let high = sortedArray.at(-1);

  while (low <= high) {
    // ortadaki öğeyi buluyoruz.
    let middle = Math.floor((low + high) / 2);

    if (sortedArray[middle] === key) {
      // ortadaki değerin, aranmasını istediğimiz değere eşit olup olmadığını sorguluyoruz, eğer eşitse arama yapılan değerin index'ini dönüyor.
      return console.log(`Aradığınız değerin index'i: ${middle}`);
    } else if (sortedArray[middle] < key) {
      // eğer ortadaki değer, aranan değerden küçükse, diziyi ikiye bölerek dizinin sol kısmını aramayı bırakıyor, burada en düşük değeri, ortadaki değere eşitledik.
      low = middle + 1;
    } else {
      // aynı şekilde ortadaki değer, aranan değerden büyükse dizinin sağ tarafını aramayı bırakıyor, en büyük değeri ortadaki değere eşitliyor.
      high = middle - 1;
    }
  }

  // eğer aranan değer listede yoksa bir uyarı mesajı döndürüyoruz.
  return console.log("Aradığınız değer dizide bulunmuyor.");
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
binarySearch(array, 2); // çıktı: Aradığınız değerin index'i: 1
binarySearch(array, 10); // çıktı: Aradığınız değerin index'i: 9
binarySearch(array, 15); // çıktı: Aradığınız değer dizide bulunmuyor.
