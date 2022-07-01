// Öklid Algoritması matematikte sık kullanılan en büyük ortak bölen sayıyı bulmak için kullanılan bir algoritmadır.

const greatestCommonDivisor = (a, b) => {
  // rekürsif olarak çalışan fonksiyonumuz iki sayı birbirini tam olarak bölene kadar sayıların modunun alınması ile sağlanır.
  // iki sayı birbirine tam olarak bölündüğünde fonksiyon sonlanır ve en büyük ortak bölen bulunmuş olur.
  if (b === 0) return a;
  else return greatestCommonDivisor(b, a % b);
};

console.log(greatestCommonDivisor(15, 30));
