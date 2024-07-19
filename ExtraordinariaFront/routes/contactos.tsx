import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Agenda from "../components/Agenda.tsx";
import { Contact } from "../types.ts";



export const handler:Handlers = {

    GET:async(req:Request,ctx:FreshContext) => {
        const {dni} = ctx.params; 
        const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`); 
        const contacts:Contact[] = await response.json();
        return ctx.render(contacts); 
    }
}


const Page = () => {
    
    return(
    <Agenda/>
    ); 
}


export default Page; 