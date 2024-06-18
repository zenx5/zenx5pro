"use client";
import Icon from "@mdi/react";
import { mdiFile, mdiGithub, mdiLinkedin, mdiSchool, mdiWhatsapp, mdiEmail } from "@mdi/js";

const paths:any = {
    'mdi-linkedin'  :   mdiLinkedin,
    'mdi-whatsapp'  :   mdiWhatsapp,
    'mdi-github'    :   mdiGithub,
    'mdi-file'      :   mdiFile,
    'mdi-scholl'    :   mdiSchool,
    'mdi-email'     :   mdiEmail
}

export default function MdiIcon({ size, icon}:{ size:number, icon:string }) {

    return <Icon path={paths[icon]} size={size ?? 1} />
}