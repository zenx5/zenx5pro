"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ModalContainer({ modals }: { modals: any[] }) {
    const [ open, setOpen ] = useState(false);
    const [ content, setContent ] = useState( null );
    const searchParams = useSearchParams();

    const getModal = async (name:string, data:any) => {
        const modal = modals.find( (modal:any) => modal.name === name );
        if( !modal ) return false;
        const response = await modal.recovery( data )
        return modal.component( response );
    }

    useEffect(()=>{
        (async ()=>{
            const modalName = searchParams.get('modal');
            const params = searchParams.get('params');
            const data = {} as {[key:string]:any}
            if( !modalName ) {
                setContent( null )
                setOpen( false )
            }
            if( typeof params !== 'string' ) return;
            for( const param of params.split(',') ) {
                data[param] = searchParams.get(param)
            }
            if( modalName ){
                setOpen(true);
                const component = await getModal(modalName, data)
                if( component ) {
                    setContent( prev => component )
                }
                else {
                    setOpen(false);
                }
            }
        })()
    },[searchParams])


    return open && <div className="absolute z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <Link href="?" className="fixed rounded-md text-black z-20 md:top-10 p-2 top-5 right-10 border bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Link>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            { content ? content : <div className="flex items-center justify-center min-h-screen text-center text-white font-bold">Loading...</div> }
        </div>
    </div>
}