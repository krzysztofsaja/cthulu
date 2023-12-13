import React from 'react';
import Layout from '../shared/components/Layout';
import CharacterDropdown from '../shared/components/Button/CharacterDropdown';

function BackstoryScreen() {
  const characters = ['Character 1', 'Character 2', 'Character 3']; // Add your characters here

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between h-screen">
        <h1 className="mb-8 text-3xl font-bold">Backstory Screen</h1>
        <CharacterDropdown characters={characters} />
      </div>
    </Layout>
  );
}

export default BackstoryScreen;
