import {FunctionComponent} from "preact"; 
import {useState} from "preact/hooks"; 
import { Contact } from "../types.ts";

type Props = {
    contactos:Contact[];  
}


export const Agenda:FunctionComponent<Props> = ({contactos}) => {
    return(
        <>
        <h1>Contactos</h1>
        {contactos.map((contact)=>{
        <div>
        <span>Name: {contact.name}</span>
        <span>Email:{contact.email}</span>
        </div>
        })}

        <div>
        <h1>Añadir Contactos</h1>
        <form action="/contactos" method="POST">
        <label for="name">Nombre:</label>
        <input type ="text" name="name" id="name"/>   
        <label for="email">Email:</label>
        <input type="email" name="email" id="email"/>
        <button type="submit">Añadir</button>
        </form>
        </div>
        </>
    )
}

export default Agenda; 