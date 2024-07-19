import {FunctionComponent} from "preact"; 

const Access:FunctionComponent = () => {

    
    return(
        <>
        <div>
            <form method="post" action="/contactos">
            <label for="dni">Introduce tu DNI:</label>
            <input type ="text"id="dni"placeholder="12345678A" required/>
            <button>Ir a mi agenda</button>
            </form>
        </div>
        </>
    );
};

export default Access; 