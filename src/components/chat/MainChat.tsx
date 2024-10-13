"use client";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Input from "./Input"
import MessageItem from "./MessageItem";
import { Message, continueConversation } from "@/tools/actions";
import LinkSchedule from "../LinkButton";




export function MainChat() {
    const refChatBox = useRef<HTMLDivElement>(null)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<Message[]>([
        // { role: 'assistant', content: `Basándonos en su experiencia, habilidades, expectativas y lo que sabemos de sus aspiraciones salariales, Octavio consideraría seriamente ofertas laborales que estén dentro del rango de **$1200 a $1800 dólares mensuales**. Este rango se justifica por: * **Su experiencia y habilidades:** Octavio tiene amplia experiencia en desarrollo web, especialmente con React, Next.js y WordPress. Ha liderado equipos, corregido malas prácticas de desarrollo y trabajado en proyectos complejos para empresas internacionales. * **Sus aspiraciones salariales:** Ha mencionado que considera que su experiencia merece una remuneración mayor a la que ha recibido en algunos trabajos y que su objetivo es alcanzar un salario dentro de ese rango. * **Su situación actual:** Actualmente, sus proyectos como freelance y su trabajo dictando clases le permiten obtener ingresos considerables. Para que una oferta laboral sea atractiva, debería igualar o superar sus ingresos actuales. Es importante destacar que este rango es una referencia y puede variar dependiendo de otros factores como: * **Tipo de empresa:** Una empresa grande o con mayor presupuesto podría ofrecer un salario en la parte alta del rango, mientras que una startup o empresa más pequeña podría estar en la parte baja. * **Beneficios adicionales:** Beneficios como seguro médico, plan de pensiones, vacaciones pagadas, flexibilidad horaria o posibilidades de desarrollo profesional podrían influir en su decisión, incluso si el salario base es ligeramente menor. * **Interés en el proyecto:** Si el proyecto es particularmente interesante, desafiante o se alinea con sus objetivos profesionales a largo plazo, podría considerar una oferta con un salario ligeramente inferior al rango inicial. En resumen, Octavio busca un trabajo que le ofrezca un equilibrio entre una buena remuneración económica, un ambiente laboral positivo y oportunidades de crecimiento profesional. El rango salarial de $1200 a $1800 dólares mensuales es un buen punto de partida para determinar si una oferta laboral se ajusta a sus expectativas.` }
    ])

    const lastIsAssistant = messages.length > 0 ? messages[messages.length - 1]?.role === 'assistant' : true

    useEffect(() => {
        if (refChatBox.current) {
            refChatBox.current.scrollTo(0,refChatBox.current.scrollHeight)
        }
    }, [messages])

    useEffect(() => {
        if( lastIsAssistant ) return
        (async ()=>{
            if( messages.length === 0 ) return
            const { messages:newMessages } = await continueConversation(messages)
            setMessages(newMessages)
        })()
    }, [lastIsAssistant, messages])

    const handlerSend = async () => {
        if( message === "" ) return
        setMessages(prev=>[...prev, { role: 'user', content: message }])
        setMessage("")
    }

    return <div className="flex-grow flex flex-col rounded-lg p-4 gap-2" style={{ height:'-webkit-fill-available' }}>
        <div  className="flex flex-col">
            <span  className="flex flex-row justify-between">
                <h2 className="font-bold text-lg">Sobre mí</h2>
                <Link href="?" className="text-indigo-500 items-center flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Link>
            </span>
            <p className="my-2">Hola! he preparado esta IA con la información sobre mi, aún un poco más de la que encontrarías en mi CV, puedes preguntarles cosas especificas del cargo para el cual buscas para saber en función de mi experiencia y expectativas podría cubrirla</p>

        </div>
        <div className="flex-grow overflow-auto px-3 border border-indigo-400 h-full will-change-scroll" style={{ scrollbarWidth:"thin", scrollBehavior:"smooth" }} ref={refChatBox}>
            { messages.map( (message:any, index:number) => <MessageItem key={index} content={message.content} sended={message.role==='user'} />) }
            { !lastIsAssistant && <MessageItem content="..." sended={false} /> }
        </div>
        <div className="mt-4 flex gap-2">
            <Input
                className="flex-grow"
                placeholder={!lastIsAssistant ? "Assistan is writing" : "Type a message..."}
                type="text"
                disabled={!lastIsAssistant}
                value={message}
                onKeyDown={event => event.key === "Enter" && handlerSend()}
                onChange={event => setMessage(event.target.value)}
            />
            <button onClick={handlerSend} className="text-indigo-500 items-center flex flex-row">
                <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                </svg>
                <span className="sr-only">Send</span>
            </button>
            <span className="border-l border-slate-500 mx-2"></span>
            <LinkSchedule />
        </div>
    </div>
}