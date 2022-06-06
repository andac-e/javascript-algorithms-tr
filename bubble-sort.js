// Bubble Sort karşılaştırma temelli bir algoritmadır. Veri kaynağındaki her elemanın yanındaki eleman ile karşılaştırılmasına dayanan, ilk elemanın değerinin ikinci elemandan büyük olması durumunda yer değiştirip, tüm veri kaynağı sıralanana kadar devam eden bir algoritmadır.

const bubbleSort = (array) => {
  // döngümüzü başlatıyoruz. amacımız ilk elemandan başlayarak, mevcut elemanı dizinin sonraki elemanı ile karşılaştırmak.
  for (let i = 0; i < array.length; i++) {
    // bu değişkeni tanımlama amacı, bu döngü array'ın uzunluğu kadar dönecektir. doğru sıralanmış bir dizide dönmeye devam etmek performans ve optimizasyon açısından verimli bir çözüm olmayabilir.
    let isSwapped = false;
    for (let j = 0; j < array.length; j++) {
      // geçerli öğe, dizinin sonraki öğesinden büyükse bu iki öğeyi yer değiştiriyoruz.
      // mevcut eleman bir sonraki elemandan daha küçükse, bir sonraki elemana geçiyoruz.
      // ilk adımı dizinin eleman sayısı kadar tekrar ediyoruz.
      if (array[j] > array[j + 1]) {
        let temporaryArray = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporaryArray;
        isSwapped = true;
      }
    }

    // eğer herhangi iki öğe, içerdeki döngüde yer değiştirmediyse döngüden çıkıyoruz.
    if (!isSwapped) break;
  }

  // (opsiyonel)
  // ES6 ile gelen Set yapısı, benzersiz değerler tutmamıza olanak sağlıyor.
  // örnek dizide 1 ve 2 değerleri birden fazla kez tekrar ediyor.
  // Set yapısına göre, ilkel tipler veya nesne referansları farketmeksizin her değer benzersizdir ve sadece bir kere oluşabilir.
  // bu sayede Set yapısını kullanarak tekrarlayan ögelerden kurtulmuş oluyoruz ve aşağıdaki örneğin çıktısı şu şekilde oluyor;
  // [1, 2, 3, 4, 5, 9, 11, 12]
  return [...new Set(array)];
};

console.log(bubbleSort([2, 4, 12, 11, 5, 3, 1, 9, 2, 2, 1, 1, 2]));
