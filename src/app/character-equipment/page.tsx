import Layout from "@/src/shared/components/Layout";
import Link from "next/link";

function CharacterEquipment() {
  return (
    <Layout>
      <h1>Character Equipment</h1>
      <Buttons_equipment></Buttons_equipment>
      <div className="flex justify-center mt-10 mb-16">
        <input className="name" id="name" type="text"/>
        <input className="damage" id="damage" type="text"/>
        <input className="attacks" id="attacks" type="text"/>
        <input className="ammo" id="ammo" type="text"/>
        <input className="malf" id="malf" type="text"/>
      </div>
      
      <div className="flex justify-center">
        <button id="save-button" className="bg-secondary flex w-20 h-10 items-center justify-center rounded-xl [font-family:'Lexend-Bold',Helvetica] font-bold text-white">
          Add item
        </button>
      </div>

      <Link href="/character-skill">Przejdź do umiejętności postaci</Link>
    </Layout>
  );
}

export default CharacterEquipment;
