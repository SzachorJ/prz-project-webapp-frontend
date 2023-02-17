const Home = () => {
  return (
    <div className="pages-home">
      <h2>Cel</h2>
      <span>
        Celem projektu jest utworzenie modułowego systemu pozwalającego na
        zbieranie, przetwarzanie oraz wyświetlanie użytkownikowi danych
        przydatnych podczas wyczynowej jazdy samochodem. Projekt tworzony jest z
        myślą o starszych modelach samochodów nieposiadających łącza OBDII,
        które z założenia mają być modyfikowane oraz przygotowywane do jazdy po
        odcinkach specjalnych bądź torach.{" "}
      </span>
      <h2>Elementy systemu</h2>
      <span>
        Modułowy układ zbierający i przetwarzający dane, który jest zbudowany na
        płytkach esp32 / arduino / stm32. Układ jest oparty o centralną
        jednostkę odpowiedzialną za sterowanie poszczególnymi modułami oraz
        przekazywaniem zebranych danych do aplikacji.
      </span>
      <br />
      <span>
        Aplikacja mobilna odpowiedzialna za wyświetlanie oraz logowanie danych.
        Interfejs może być edytowalny tak, aby użytkownik był w stanie samemu
        określić potrzebne mu informacje.
      </span>
      <br />
      <span>
        Aplikacja webowa umożliwiająca odczyt poszczególnych logów oraz
        tworzenie wykresów bądź tabel porównawczych dla wybranych danych.
      </span>
    </div>
  );
};

export default Home;
