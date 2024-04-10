"use client"
import ModalContainer from "./ModalContainer";
import SkillDetails from "./SkillDetails";

const modals:any[] = [
    {
      name:'skill',
      recovery: async (data:any) => data,
      component: (data:any) => <SkillDetails {...data}/>
    }
  ]

export default function ModalCover(){
    return <ModalContainer modals={modals} />
}