'use client';
import IntroHeader from "@/src/shared/components/IntroHeader";
import ButtonCreateNewChar from "../shared/components/ButtonCreateNewChar";
import ButtonChooseCharacter from "../shared/components/ButtonChooseCharacter";
import "./auth-route/AuthRoute";
export default function Home() {
  return (
    <div className="bg-mainBg flex flex-col flex-wrap flex h-screen place-items-center">
        <div className="mt-10 mb-16"><IntroHeader></IntroHeader></div>
        <div className="mb-11"><ButtonCreateNewChar></ButtonCreateNewChar></div>
        <div className=""><ButtonChooseCharacter></ButtonChooseCharacter></div>
    </div>
    
  );
}
