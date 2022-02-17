---
title: Nowa wersja POS
tags: [pos, aktualizacja, wideo]
---

![POS](/img/PH-POS/pos-logowanie.png)

Przedstawiamy obszerną aktualizację naszego systemu POS. Wprowadzone zmiany mają na celu ujednolicenie interfejsu oraz poprawienie intuicyjności obsługi systemu.

Najważniejsze zmiany prezentujemy w krótkim filmie, do którego link znajduje się w poście.

<!--truncate-->

import YouTube from 'react-youtube';

<YouTube videoId="h3wFlklW9jI" />

![Widok POS](/img/blog/2021-10-05-Nowa-wersja-POS/PH-POS.png)

## Zmiany w interfejsie

Lewy panel został podzielony na trzy zakładki: **Rachunek**, **Rezerwacje stolika** oraz **Więcej…** (pozostałe przyciski).

![Zakładki](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Zakladki.png)

Usunęliśmy panel dolny z dodatkowymi przyciskami. Podstawowe, ważne w codziennej pracy z rachunkiem przyciski (`Drukuj`, `Rozlicz`, `Karta`, `Gotówka`, `Stoliki` i `Sprzedaż`), zostały umieszczone pod rachunkiem. Pozostałe przyciski zostały przeniesione pod przycisk `Więcej...`

![Przyciski](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Przyciski.png)

Dodaliśmy przyciski do przesuwania pozycji na rachunku góra/dół, przyciski do zwiększania/zmniejszania ilości oraz przycisk `Zmień` otwierający edycję pozycji.

Ponadto:

- przycisk `Wliczaj` został przeniesiony do okna edycji pozycji,
- przycisk `Wliczaj` wszystkie do okna edycji stolika,
- dodatkowy opis przeniesiony do okna edycji pozycji,
- scalanie/przenoszenie rachunku przeniesione do edycji stolika,
- rozdzielanie pozycji przeniesione do edycji pozycji,
- przekazywanie stolika przeniesione do edycji stolika.

Zmieniliśmy możliwość podziału rachunku na **Rozliczenia**. Zamiast grupowania wg numeru rozliczenia w jednej tabelce, dodaliśmy przyciski nad rachunkiem do konkretnych rozliczeń wraz z możliwością otworzenia nowego rachunku/rozliczenia. Na kafelku wyświetla się kwota danego rachunku.

Usunęliśmy opcję zmiany stolika w lewym górnym rogu oraz przycisk `Nowy stolik`.

POS zaprojektowany jest dla rozdzielczości 1024x768px oraz dostosowany do ekranów dotykowych.

## Okno edycji pozycji

Możemy je aktywować klikając przycisk `Zmień`, prawym przyciskiem myszy na pozycji oraz podwójny klik na pozycji. W samym oknie edycji mamy możliwość zmiany ilości, ceny, rabatu itp. Dodatkowo na kolejnych zakładkach jest możliwość dodania opisu, rozdzielenia pozycji i zmiany punktu rozchodu (opcja w ustawieniach). W oknie edycji pozycji pojawiła się również możliwość podglądu receptury.

![Okno edycji](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Okno-edycji.png)

## Lista pozycji

Dodaliśmy możliwość zmiany kolejności pozycji poprzez przeciąganie wierszy na liście (metoda przeciągnij i upuść - drag&drop). Dodatkowo możliwe jest również przenoszenie pozycji między rachunkami/rozliczeniami. Uaktualniliśmy kolorystykę poszczególnych pozycji:

- **zielony** oznacza nową pozycję (wcześniej jasno niebieski), 
- **niebieski** oznacza aktywną pozycję, 
- **złoty** oznacza niewliczaną pozycję, 
- **fioletowy** oznacza pozycję All Inclusive.

![Kolory](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Kolory.png)

## Wyszukiwanie

Podzieliliśmy górne pole wyszukiwarki wg nazwy/symbolu na dwa pola: wyszukiwanie towaru po **symbolu/kodzie kreskowym** oraz osobno wyszukiwanie po nazwie, gdzie dodano możliwość wyszukiwania po fragmencie tekstu wraz z zawężaniem listy wyszukiwania.

![Wyszukiwanie](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Wyszukiwarka.png)

## Edycja stolików

Edycja stolików możliwa jest po kliknięciu prawym przyciskiem myszy na widoku stolików wraz z wszystkimi innymi opcjami. Dodatkowo umożliwiono dodanie uprawnień do akcji POS → Edytuj układ stolików, aby dowolny użytkownik mógł edytować układ.

**Okno edycji stolika** - aktywowane po kliknięciu w przycisk `Zmień` nad rachunkiem, gdzie mamy kwotę, numer stolika i nazwisko kelnera. Oprócz edycji opisu stolika i ilości osób, na kolejnych zakładkach, mamy możliwość przekazania stolika, przeniesienia/scalenia rachunków z innym stolikiem, oraz nadania rabatu na cały rachunek (o tym niżej). Dodatkowo zostały tam przeniesione przyciski: wliczaj wszystkie, odśwież, rabat z karty i room service (aktywowane w ustawieniach).

Również w oknie edycji stolika pojawiła się zakładka **Rabat na cały rachunek** - wpisany rabat zastosuje się do wszystkich pozycji.

![Edycja stolika](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Okno-edycji-stolika.png)

## Panel rozliczeń

Przebudowaliśmy wygląd panelu rozliczeń, możliwe opcje zostały zmienione na kafelki. Scalono wybór meldunku i kuracji do jednego pola.

![Rozliczenia](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Rozliczenia.png)

## Klawiatura ekranowa

Usunęliśmy klawiaturę ekranową w prawym dolnym rogu. Dla ekranów dotykowych, należy wykorzystać ustawienia systemu Windows, aby klawiatura ekranowa była pokazywana w momencie aktywowania pola edycji.

Klawiaturę ekranową aktywujemy poprzez wejście w Menu Start -> Ustawienia -> Urządzenia -> Pisanie -> **Pokaż klawiaturę dotykową, gdy tryb tabletu nie jest używany i nie podłączono klawiatury**.

![Klawiatura](/img/blog/2021-10-05-Nowa-wersja-POS/PH-Klawiatura.gif)