import { useState } from "react";
import { text } from "stream/consumers";

const Skills = () => {
    const [spellName, setSpellName] = useState("");
    const [sanityLoss, setSanityLoss] = useState("");
    const [magicCost, setMagicCost] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [skills , setSkills] = useState([1,2,3]);
    async function getSkills() {
      
    }
    async function addSkill() {
      const data = {
        name : spellName,
        loss: sanityLoss,
        cost: magicCost
      }
      //send Skill
      setSkills((prevSkills) => [
        ...prevSkills,
        {name : spellName, loss: sanityLoss, cost: magicCost},
      ]);
    }
    async function clearSkills() {
      
    }

    if (editMode){
      return (
        <div className="">
          <div className="">Edit Spell</div>
          <div className="">
            <div className="">Spell Name</div>
            <input className="" type="text" placeholder="Enter new Name"/>
          </div>
          <div className="">
            <div className="">Sanity Loss</div>
            <input className="" type="text" placeholder="Enter new Value"/>
          </div>
          <div className="">
            <div className="">Magic Cost</div>
            <input className="" type="text" placeholder="Enter new Value"/>
          </div>
          <button className="">Save</button>
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
                        <div className="">
                            <div className="">
                                <p>Spell name</p>
                            </div>
                            <div className="">{skill.name}</div>
                            </div>
                            <div className="">
                                <div className="">
                                    <p>Sanity loss</p>
                                </div>
                                <div className="">{skill.loss}</div>
                            </div>
                            <div className="">
                                <div className="">
                                    <p>Magic cost</p>
                                </div>
                                <div className="">{skill.cost}</div>
                            </div>
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
        {active === 1 && <Skills />}
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
