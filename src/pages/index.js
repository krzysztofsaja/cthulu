import Link from 'next/link';

function IntroScreen() {
  return (
    <div>
      <h1>Intro Screen</h1>
      <Link href="/character_profile">Przejdź do strony postaci</Link>
    </div>
  );
}

export default IntroScreen;
