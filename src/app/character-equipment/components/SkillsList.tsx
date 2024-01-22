import { useState } from "react";

const Content1 = () => {
    const [spellName, setSpellName] = useState("");
    const [sanityLoss, setSanityLoss] = useState("");
    const [magicCost, setMagicCost] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [skills , setSkills] = useState([1,2,3]);
    if (true){
      return (
        <div className="">

        </div>
      )
    }

  return (
    <div className="">
        <div className="">
            <div className="">
                <div className="">
                    <p>Spell name</p>
                </div>
                <div className="">
                    <input
                    className=""
                    type=""
                    placeholder=""
                    value={spellName}
                    onChange={(e) =>setSpellName(e.target.value)}
                    />
                </div>
            </div>
            <div className="">
                <div className="">
                    <p>Sanity loss</p>
                </div>
                <div className="">
                    <input
                    className=""
                    type=""
                    placeholder=""
                    value={sanityLoss}
                    onChange={(e) =>setSanityLoss(e.target.value)}
                    />
                </div>
            </div>
            <div className="">
                <div className="">
                    <p>Magic cost</p>
                </div>
                <div className="">
                    <input
                    className=""
                    type=""
                    placeholder=""
                    value={magicCost}
                    onChange={(e) =>setMagicCost(e.target.value)}
                    />
                </div>
            </div>
            <button className="">Add</button>
            <button className="">Clear</button>
        </div>
        <div className="">
            {skills.map((skill,index)=>{
                return(
                    <div className="">
                        <div className="">

                        <button className="">Edit</button>
                        <button className="">Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  ) ;
};
// const Content2 = () => {
//   return <p>Content 2</p>;
// };
// const Content3 = () => {
//   return <p>Content 3</p>;
// };

export default function SkillList() {
  const [active, setActive] = useState<number>(-1);

  const toggleHandler = (id: number) => () =>
    setActive((active) => (active === id ? -1 : id));

  return (
    <div>
      <div>
        <div onClick={toggleHandler(1)}>Spells</div>
        {active === 1 && <Content1 />}
      </div>
      {/* <div onClick={toggleHandler(2)}>
        Click to show content 2{active === 2 && <Content2 />}
      </div>
      <div onClick={toggleHandler(3)}>
        Click to show content 3{active === 3 && <Content3 />}
      </div> */}
    </div>
  );
}
