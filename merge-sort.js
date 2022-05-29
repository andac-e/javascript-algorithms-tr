// Merge Sort 'Parçala ve Fethet (Divide and Conquer)' yaklaşımı ile çalışan bir sıralama algoritmasıdır. Sıralanmasını istediğimiz veri kaynağını, ikişer elemanı kalan parçalar haline getirene kadar sürekli olarak ikiye böler. Daha sonra bu parçaları içlerinde sıralayarak birleştirir.

// mergeSort fonksiyonu ile ana diziyi parçalarına ayırıp her elemanı tek elemanlı bir dizi haline getirip merge fonksiyonu ile bunları sıralayıp birleştireceğiz.
const merge = (left, right) => {
  // elemanlarımızı sortedArray'e ekleyeceğiz.
  let sortedArray = [];

  // dizilerimizin içi boş hale gelene kadar döngüye devam ediyoruz.
  while (left.length && right.length) {
    // burada birleşim sonucunda elde edeceğimiz diziye, iki dizininde içinde eleman kalmayana kadar en küçük elemanı ekliyoruz.
    sortedArray.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  // sol veya sağ dizide kalan eleman olması durumunda, spread operatörü ile üç diziyi birleştirip tek bir dizi elde ediyoruz ve onu dönüyoruz.
  return [...sortedArray, ...left, ...right];
};

const mergeSort = (array) => {
  // dizilerde tek eleman kalana kadar bu işleme devam edeceğiz. o yüzden bu koşul diziler tek elemana düşene kadar çalışmayacak. tek elemana düştüğümüzde fonksiyondan çıkacağız.
  if (array.length < 2) return array;

  // ana diziyi ikiye bölüyoruz, sol ve sağ olarak ikiye ayırıyoruz. bu işleme her dizi tek elemana düşene kadar devam ediyoruz. daha sonra bu dizileri daha önce yazdığımız merge metodu ile birleştiriyoruz.
  const middle = Math.floor(array.length / 2);
  const left = array.splice(0, middle);
  const right = array;

  // ilk işlem gerçekleştiğinde böldüğümüz dizilerin çıktısı şu şekilde olacak:
  // [4, 8, 7] [2, 11, 1, 3]
  // son çıktı şu şekilde olacaktır:
  // [4] [8] [7] [2] [11] [1] [3]

  return merge(mergeSort(left), mergeSort(right));
};

array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array)); // çıktı: [1, 2, 3, 4, 7, 8, 11]
array2 = ["z", "c", "f", "i", "a", "o"];
console.log(mergeSort(array2)); // çıktı: ['a', 'c', 'f', 'i', 'o', 'z']
