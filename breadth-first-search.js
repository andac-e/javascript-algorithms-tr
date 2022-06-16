// Breath First Search (Genişlik Öncelikli Arama) graflar ve ağaçlarda (graph/tree traversal) arama işlemi gerçekleştiren bir algoritmadır. DFS'ten farklı olarak bu sefer belirlediğimiz node'un bağlantılı tüm komşularına/çocuklarına bakacağız. Bu çocuk node'larda gezme işlemi bittiğinde aynı şekilde gezilen node'ların çocukları varsa onları gezeceğiz.

//       A
//       /\
//      B  F
//     /\
//    C  D
//      /
//     E
// A noktası root node yani başlangıç noktasıdır.
// A'nın çocuğu olan 2 node B ve F gezilir,
// Bu iki node'un çocukları var mı diye bakılır,
// C ve D gezilir.
// Algoritma sonunda sıralamamız: A B F C D E

// Kaynak: https://fireship.io/courses/javascript/interview-graphs/

const cities = [
  "ISTANBUL",
  "ANKARA",
  "IZMIR",
  "NEW YORK",
  "LOS ANGELES",
  "SYDNEY",
];
const routes = [
  ["ISTANBUL", "IZMIR"],
  ["ISTANBUL", "NEW YORK"],
  ["LOS ANGELES", "NEW YORK"],
  ["LOS ANGELES", "SYDNEY"],
  ["IZMIR", "ANKARA"],
  ["SYDNEY", "IZMIR"],
  ["SYDNEY", "ISTANBUL"],
  ["ANKARA", "SYDNEY"],
];

const vertices = new Map();

const addNode = (city) => {
  vertices.set(city, []);
};

const addEdge = (city, destination) => {
  vertices.get(city).push(destination);
  vertices.get(destination).push(city);
};

cities.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// başlangıç ve hedef parametreleri alan fonksiyonumuzu tanımlıyoruz.
const bfs = (start, goal) => {
  console.log(start);
  const visited = new Set();
  // bu algoritma kuyruk veri yapısı kullanır, yani ilk giren ilk çıkar (first in first out) prensibiyle çalıştığı için bir dizi oluşturup ilk elemana başlangıç noktamızı veriyoruz.
  const queue = [start];

  // queue dizimiz dolu olduğu sürece bu fonksiyonun çalışacağını söylüyoruz.
  while (queue.length > 0) {
    // prensip gereği dizimizdeki ilk elemanı shift() metoduyla alıyoruz. Shift bize dizideki ilk elemanı çıkartır ve bu elemanı bize döner.
    const city = queue.shift();
    const destinations = vertices.get(city);

    for (const destination of destinations) {
      // eğer hedef nokta bulunursa iterasyondan çıkıp hedefin bulunduğuna dair mesaj yazdırıyoruz.
      console.log(destination);
      if (destination === goal) {
        console.log(`BFS found ${goal}`);
        return;
      }
      // eğer hedef bulunmazsa visited Set nesnesi ve queue dizimize bulunduğumuz şehri/rotayı ekliyoruz.
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
};

bfs("IZMIR", "SYDNEY");
// çıktımız şu şekilde olacaktır:

// IZMIR
// ISTANBUL
// ANKARA
// SYDNEY
// BFS found SYDNEY
