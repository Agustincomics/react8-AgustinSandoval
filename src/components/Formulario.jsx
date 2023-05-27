import {Form, Button} from 'react-bootstrap';
/* import ListaTareas from './ListaTareas'; */
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, setTarea] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState(0);
    const [mail, setMail] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (nombre.trim() === "" || apellido.trim() === "" || dni <= 0 || mail.trim() === "") {
            setError("completar todos los campos correctamente.");
            return;
          }

        setTarea("");
        setError("");
        setApellido("");
        setDni(0);
        setMail("");
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
            {error && <div>{alert(error)}</div>}
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese el Nombre" required maxLength={20} minLength={4}
                    onChange={(e)=> setTarea(e.target.value)}
                    value={nombre} />
                     <Form.Control type="text" placeholder="Ingrese el Apellido" required maxLength={20} minLength={4}
                    onChange={(e)=> setApellido(e.target.value)}
                    value={apellido} />
                     <Form.Control type="number" placeholder="Ingrese el DNI" required max={100000000} min={1000000}
                    onChange={(e)=> setDni(e.target.value)}
                    value={dni} />
                     <Form.Control type="email" placeholder="Ingrese el mail" required 
                    onChange={(e)=> setMail(e.target.value)}
                    value={mail} />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
{/*             <ListaTareas listadoTareas={listadoTareas} borrarTarea={borrarTarea}></ListaTareas>
 */}        </section>
    );
};

export default Formulario;