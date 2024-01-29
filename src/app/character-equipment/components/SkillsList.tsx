import { useEffect, useState } from "react";
import { json, text } from "stream/consumers";

export interface SkillType {
  id: number;
  name: string;
  loss: string;
  cost: string;
}

const Skills = () => {
    const [spellName, setSpellName] = useState("");
    const [sanityLoss, setSanityLoss] = useState("");
    const [magicCost, setMagicCost] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [editSkillInfo, setEditSkillInfo] = useState({
      id: 0,
      name: "",
      loss: "",
      cost: "",
    })
    const [skills, setSkills] = useState<SkillType[]>([]);
    
    const getSkills = () => {
      let tempskills = localStorage.getItem("skills");
      console.log(tempskills);
      if(tempskills == null) setSkills([]);
      else setSkills(JSON.parse(tempskills));
    }

    useEffect(() => {
      getSkills();
    }, [])

    const addSkill = () => {
      let data = {
        id: new Date().getTime(),
        name : spellName,
        loss: sanityLoss,
        cost: magicCost
      }
      
      let localSkills = localStorage.getItem("skills");
      if (localSkills == null) localStorage.setItem('skills',JSON.stringify([data]))
      else {
        let skills = JSON.parse(localSkills);
        skills.push(data)
        localStorage.setItem('skills',JSON.stringify(skills))
      }
      getSkills();
    }
    const clearSkills = () => {
      localStorage.clear();
      setSkills([]);
      getSkills();
    }

    const editSkill = (id: number) => {
      let tempskills = localStorage.getItem('skills');
      if (tempskills) {
        let skills = JSON.parse(tempskills);
        let curentSkill = skills.find((skill: SkillType) => skill.id == id)
        let index = skills.indexOf(curentSkill);
        setEditMode(true);
        setEditSkillInfo({
          id: skills[index].id,
          name: skills[index].name,
          loss: skills[index].loss,
          cost: skills[index].cost,
        });        
        localStorage.setItem('skills',JSON.stringify(skills));
      }
    }
    const deleteSkill = (id:number) => {
      let tempskills = localStorage.getItem('skills');
      if (tempskills) {
        let skills = JSON.parse(tempskills);
        let curentSkill = skills.find((skill: SkillType) => skill.id == id)
        let index = skills.indexOf(curentSkill);

        skills.splice(index,1);
        localStorage.setItem('skills',JSON.stringify(skills));
        getSkills();
      }
    }

    if (editMode){
      return (
        <div className="">
          <div className="">Edit Spell</div>
          <div className="">
            <div className="">Spell Name</div>
            <input className="" type="text" placeholder="Enter new Name" value={editSkillInfo.name} onChange={(e) => setEditSkillInfo({ ...editSkillInfo, name: e.target.value})}/>
          </div>
          <div className="">
            <div className="">Sanity Loss</div>
            <input className="" type="text" placeholder="Enter new Value" value={editSkillInfo.loss} onChange={(e) => setEditSkillInfo({ ...editSkillInfo, loss: e.target.value})}/>
          </div>
          <div className="">
            <div className="">Magic Cost</div>
            <input className="" type="text" placeholder="Enter new Value" value={editSkillInfo.cost} onChange={(e) => setEditSkillInfo({ ...editSkillInfo, cost: e.target.value})}/>
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
            <button className="" onClick={() => addSkill()}>Add</button>
            <button className="" onClick={() => clearSkills()} >Clear</button>
        </div>
        <div className="">
            {skills.map((skill,index)=>{
                return(
                    <div key={`skill-${index}`} className="">
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
                          <button className="" onClick={() => editSkill(skill.id)} >Edit</button>
                          <button className="" onClick={() => deleteSkill(skill.id)} >Delete</button>
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
