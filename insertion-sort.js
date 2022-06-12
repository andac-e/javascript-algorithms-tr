// Insertion Sort karşılaştırma temelli bir sıralama algoritmasıdır. Veri kaynağının 2. elemanından başlayarak, bu elemanın kendinden önceki elemanlar ile karşılaştırılması ve eğer küçükse onlarla yer değiştirmesi ve veri kaynağında bulunan elemanların hepsi üzerinde gezilene kadar bu işlem devam eder.

const insertionSort = (array) => {
  // döngüyü başlatıp ikinci elemanı (1. indis yani dizinin 2. elemanı) bir değişkene atıyoruz.
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j;

    // bu döngü current değişkenimizi yani o an bulunduğu elemanı, current'in solundaki elemanlar ile (i - 1) kıyaslamaya başlıyoruz.
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      // o anki eleman, iç döngüde ki elemandan küçük olduğu sürece döngü devam edecek ve eğer current değişkeni solunda kıyaslanan elemandan küçükse  iki elemanın yerini değiştireceğiz.
      array[j + 1] = array[j];
    }
    // burada current değişkenimizi 0. indise ya da en küçük öğenin sağına yerleştiriyoruz.
    array[j + 1] = current;
  }
  return array;
};

console.log(insertionSort([1, 5, 2, 11, 3, 56]));
