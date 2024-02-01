// This component should show all Characters defined in src/data/characterData.json;
// Should render it as list of character components

import characterData from '../data/characterData.json';
import Character from '../components/Character';

function CharacterGallery() {
    console.log(characterData)
    return (
        <div>
            {characterData.map((character) => <Character
                key={character._id}
                name={character.name}
                imgUrl={character.imgUrl}
                birth={character.birth}
                death={character.death}
                race={character.race}
                realm={character.realm}
                spouse={character.spouse}
            />
            )}
        </div>
    )
}

export default CharacterGallery;