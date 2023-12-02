// types.ts - tutaj można zdefiniować typ dla postaci
export interface ICharacter {
    name: string;
    description: string;
    age: number;
    gender: string;
    birthPlace: string;
    residence: string;
    picture: undefined;

    // Atrybuty fizyczne i psychiczne
    strength: number;      // Siła
    constitution: number;  // Konstytucja
    size: number;          // Budowa ciała
    dexterity: number;     // Zręczność
    appearance: number;    // Wygląd
    intelligence: number;  // Inteligencja
    power: number;         // Moc
    education: number;     // Wykształcenie
    luck: number;          // Szczęście

    // Zdrowie i kondycja psychiczna
    hitPoints: number;     // Punkty życia
    sanityPoints: number;  // Punkty zdrowia psychicznego
    magicPoints: number;   // Punkty magii
    wounded: boolean;      // Stan zdrowia (Krwawienie)
    insanity: boolean;     // Stan mentalny (Szaleństwo)
    
    // Inne
    
    movementPoints: number // Punkty ruchu
    buildPoints: number    // Punkty budowy
    bonusDmgPoints: number // Bonusowe punkty obrażeń
}

// characterService.ts - serwis do pobierania postaci
export async function fetchCharacters(): Promise<ICharacter[]> {
    try {
        const response = await fetch('/mocks/characters.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const characters: ICharacter[] = await response.json();
        console.log(characters);
        return characters;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

// Możesz użyć tej funkcji w komponentach Next.js, na przykład w `getStaticProps` lub bezpośrednio w komponencie, jeśli potrzebujesz dynamicznie ładować dane.
