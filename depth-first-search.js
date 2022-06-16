// Depth First Search (Derinlik Öncelikli Arama) algoritması graflar ve ağaçlarda (tree traversal) arama işlemi gerçekleştiren bir algoritmadır. Başlangıç noktası (node) belirledikten sonra bu node'un komşuları gezilmeye başlanır. Her seferde bağlantı olan bir komşuya bakılır ve bu komşuyu yığına (stack) ekler, ardından buradan gezilmemiş olan diğer komşuya gider, algoritma rekürsif bi şekilde çalıştığı için gidilecek yer kalmadığında o noktadan önceki node'a geri döner ve gezilmemiş yerler var mı diye kontrol eder.

//    A----B----C
//    |\       /|
//    | \    /  |
//    |  \  /   |
//    D----E----F

// Herhangi bir başlangıç noktası seçilir, örneğin B'yi seçelim,
// B'nin komşularına bakıyoruz: A ve C;
// C'ye gidelim, bu esnada B'yi yığına ekliyoruz,
// C'den E ve F'ye gidebiliriz, E'ye gidelim ardından D'ye gidelim,
// A'ya gittikten sonra D,A ve E daha önceden gezildiği için bir önceki node'a giderek gezilmemiş node var mı diye algoritmaya rekürsif bir şekilde devam ediyoruz.
// Algoritma sonunda sıralamamız: B-C-E-D-A-F

// Daha açıklayıcı olduğunu düşündüğüm aşağıdaki örnekte veri kaynaklarımız şehirler ve rotalar, bu algoritma bize fonksiyona vereceğimiz iki şehrin arasında bir rota olup olmadığını belirleyecek.
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

// grafiği, her key'in (node) bir şehir, value'nun ise rota (birbiri ile bağlantılı olan node'lar) olduğunu düşünelim ve bunun için bir Map nesnesi oluşturalım.
const vertices = new Map();

// yukarıda oluşturduğumuz şehirleri addNode fonksiyonu ile yukarıdaki Map nesnemize göndereceğiz ve başlangıçta boş bir array ile başlayacağız.
const addNode = (city) => {
  vertices.set(city, []);
};

// iki şehir arasındaki bağlantıyı oluşturuyoruz.
const addEdge = (city, destination) => {
  vertices.get(city).push(destination);
  vertices.get(destination).push(city);
};

// grafiğimizi burada oluşturuyoruz. her şehir için bir node ve aradaki bağlantılar içinde addEdge metodu ile tüm bağlantıları grafiğe döküyoruz.
cities.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// şehirlerin bağlantılı olduğu tüm rotalar oluşturuldu. bu noktada çıktımız şu şekilde olacaktır;
// Map(6) {
//   'ISTANBUL' => [ 'IZMIR', 'NEW YORK', 'SYDNEY' ],
//   'ANKARA' => [ 'IZMIR', 'SYDNEY' ],
//   'IZMIR' => [ 'ISTANBUL', 'ANKARA', 'SYDNEY' ],
//   'NEW YORK' => [ 'ISTANBUL', 'LOS ANGELES' ],
//   'LOS ANGELES' => [ 'NEW YORK', 'SYDNEY' ],
//   'SYDNEY' => [ 'LOS ANGELES', 'IZMIR', 'ISTANBUL', 'ANKARA' ]
// }

// fonksiyonumuz 3 parametre alıyor, başlangıç noktası, rota ve gezilen node'lar yani visited nesnesi. rekürsif bir fonksiyon olduğu için daha önce gezdiği node'a bir daha giderse ve visited'e eklerse sonsuz bir döngümüz olacaktır, bu yüzden Set kullanarak her node'u sadece bir kere ekleyeceğiz.
const dfs = (start, goal, visited = new Set()) => {
  console.log(start);
  visited.add(start);

  // burada bağlantıları kontrol etmek üzere destinations adında bir iterasyon oluşturuyoruz.
  const destinations = vertices.get(start);

  // tüm bağlantılar arasında geziyoruz, eğer bulursak fonksiyondan çıkıp hedefin bulunduğuna dair bir mesaj yazdırıyoruz.
  for (const destination of destinations) {
    if (destination === goal) {
      console.log(`DFS found ${goal}`);
      return;
    }
    // eğer hedefi bulamazsak burada fonksiyon kendini tekrar ediyor yani rekürsif bir şekilde çalışmaya devam ediyor.
    if (!visited.has(destination)) {
      dfs(destination, goal, visited);
    }
  }
};

dfs("ISTANBUL", "ANKARA");
// çıktımız şu şekilde olacaktır:

// ISTANBUL
// IZMIR
// DFS found ANKARA
// NEW YORK
// LOS ANGELES
// SYDNEY
// DFS found ANKARA
