import Link from 'next/link';

function CharacterProfile() {
  return (
    <div>
      <h1>Character</h1>
      <Link href="/character_equipment">Przejdź do ekwipunku postaci</Link>
    </div>
  );
}

export default CharacterProfile;
