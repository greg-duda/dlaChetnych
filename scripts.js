/*1 - sposob I*/
const car = {
    marka: 'BMW',
    model: '335d',
    rokProdukcji: 2010
}

function viewCar(marka, model, rokProdukcji) {

    return `Marka: ${marka} Model: ${model} Rok: ${rokProdukcji}`
}
console.log(viewCar(car.marka, car.model, car.rokProdukcji))
    /*1 - sposob II*/
function viewCar2(obj) {
    return `Marka: ${obj.marka} Model: ${obj.model} Rok: ${obj.rokProdukcji}`
}
console.log(viewCar2(car))
    /* 2*/
const { marka, model, rokProdukcji } = car
console.log(marka)
console.log(model)
console.log(rokProdukcji)
    /*3*/
function viewCar3({ marka, model, rokProdukcji }) {
    console.log('Marka: ', marka)
    console.log('Model: ', model)
    console.log('Rok: ', rokProdukcji)
}
/* 4 */
let x = 5

function dodajX() {
    console.log(x++)
}
console.log(x)
    /* w pierwszej funkcji instrukcja wykona się dopiero w drugiej linijce, czyli gdybysmy sobie wylolali funkcje dodajX() - pokaze nam "5",
    dopiero pozniej gdy wykonsologujemy sobie x pokaze nam wartość o jeden więcej - czyli 6.*/
let y = 5

function dodajY() {
    console.log(++y)
}
console.log(y)
    /* W drugiej funkcji instrukcja wykonuje się w tej samej linijce, czyli wywolujac funkcje dodajY() odrazu pokazuje nam wartość po dodaniu. */
    /* 5 */
function kosz() {
    let ile = 0

    function rzutZaTrzyPunkty() {
        ile = ile + 3
        console.log(`Rzut za trzy pkt.`)

    }

    function rzutZaDwaPunkty() {
        ile = ile + 2
        console.log(`Rzut za dwa pkt.`)

    }

    function aktualnyWynik() {
        console.log(`Liczba punktów: ${ile}`)
    }

    return {
        aktualnyWynik,
        rzutZaDwaPunkty,
        rzutZaTrzyPunkty,
    }

}
const licznik = kosz()
licznik.aktualnyWynik()
licznik.rzutZaDwaPunkty()
licznik.rzutZaTrzyPunkty()
licznik.rzutZaDwaPunkty()
licznik.aktualnyWynik()


/*6.Stwórz obiekt pralka, która zawiera nazwę, liczbę dostępnych funkcji oraz metodę wewnątrz o nazwę information która wyświetli
nam dane o pralce czyli jaki to model i ile ma funkcji dostępnych, */
const pralka = {
    nazwa: 'Whirlpool',
    model: '3000',
    klasa: 'A+++',
    funkcje: ['Pranie', 'Wirowanie', 'Osuszanie', 'Prasowanie',],
    information() { 
        return `Marka: ${this.nazwa} Model: ${this.model} Klasa: ${this.klasa} Liczba dostępnych funkcji: ${this.funkcje.length} Funkcje:${showArray()}`
        function showArray() {
            for(let i = 0; i < pralka.funkcje.length; i++) {
                console.log(`${pralka.funkcje[i]}`)}
            
        }
        }
    }
    /*Chcialem tutaj w loopie dać funkcje, ale wyswietla się nie tak jak powinno :D */
console.log(pralka.information())



/*7.Opisz w skrócie na czym polega różnica miedzy kopią, a referencja i stwórz swój własny przykład obrazujący tą różnice +
jakie konkretnie typy danych są typami prostymi a jakie złożonymi?*/

/* Typy proste: np. number, string boolean, null, undefined.

Stwórzmy sobie zmienną a o wartości 10 */
let a = 10
/* Teraz stworzmy drugą zmienną i przypiszmy jej wartość zmiennej 'a'*/
let b = a
/* Na ten moment po wykonsologowaniu zmiennej a i b, obie mają takie same wartości czyli '10'*/
console.log(a) /* =10*/
console.log(b) /* =10 */
/* Teraz zmienmy wartość zmiennej a np. na 5*/
a = 5
/* Po tej zmianie, zmienna 'a' wynosi 5, a zmienna 'b' dalej wynosi '10' pomimo to że wczęsniej przypisalismy zmienną 'b' do zmiennej 'a', dlaczego?

Przypisując b do a (let b = a) stworzyliśmy kopie i w momencie przypisania stworzony został duplikat tej zmiennej który ma oddzielnie miejsce w pamięci, te dwie zmienne nie mają ze sobą nic wspólnego, mimo tego że obie mają te same wartości.
po przypisaniu 'a' nowej wartości '5', 'b' wynosi dalej '10', bo są to już dwa różne elementy i nie korelują ze sobą w żaden sposób*/
console.log(a) /* = 5 */
console.log(b) /* = 10 */

/* Typy referencyjne: object, function, array.
Stwórzmy sobię tablicę z trzema elementami: */
let arr1 = ['Grzegorz', 'Paweł', 'Maciek']
/* Teraz stworzmy zmienną 'arr2' i przypiszmy jej wartość 'arr1' */
let arr2 = arr1

console.log(arr1) /*['Grzegorz', 'Paweł', 'Maciek']*/
console.log(arr2) /*['Grzegorz', 'Paweł', 'Maciek']*/

/* Spróbujmy teraz zmienić pierwszy element tablicy 'arr2' np. na string 'Kamil' */
arr2[0] = 'Kamil'
/* Po tej operacji, oczekujemy na taki wynik consol.loga */
console.log(arr1) /*['Grzegorz', 'Paweł', 'Maciek']*/
console.log(arr2) /*['Kamil', 'Paweł', 'Maciek']*/
/* Tak się jednak nie dzieje i otrzymujemy taki wynik */
console.log(arr1) /*['Kamil', 'Paweł', 'Maciek']*/
console.log(arr2) /*['Kamil', 'Paweł', 'Maciek']*/
/* Dlaczego tak się dzieje?
w momencie w którym chcelismy zmienic pierwszy element drugiej tablicy (arr2[0] = 'Kamil'), pierwszy element ORYGINALNEJ tablicy 'arr1' również został zmieniony,
dzieje się tak dlatego że tworząc tablicę, lub inny typ referyncyjny, do zmiennej przypisujemy jedynie ADRES, czyli wskazanie, gdzie w pamięci znajduje się dana tablica,obiekt itd.
Nie tworzy nam się kopia, tak jak w przypadku typów prostych.
Referencja = odwołanie / odnośnik.
Warto jednak tworzyć kopie takich typów danych, mozna to zrobić za pomocą np. spread syntax.
czyli chcąc skopiowac taki typ danych robimy tak:
let arr1 = ['Grzegorz', 'Paweł', 'Maciek']
let arr2 = [...arr1]
arr2[0] = 'Kamil'
w tym momencie wynik consol.loga arr1 i arr2 wynosi:
console.log(arr1) /*['Grzegorz', 'Paweł', 'Maciek']
console.log(arr2) /*['Kamil', 'Paweł', 'Maciek']*/
/* Miało być w skrócie xD
wiem ze dalo sie to krocej napisać ale lubie łopatologiczne tłumaczenia, */
