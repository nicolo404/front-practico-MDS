import React from "react";
import "../App.css"
import { get_tbl_categoriaentradaById, put_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import Main from "../components/Menu";
import { useParams } from "react-router-dom";
const Update_categoriaEntrada = () => {
    const {id} = useParams();
    const [categoria, setCategoria] = React.useState({
        I_IDCATENTRADA: "",
        S_NBCATENTRADA: "",
        I_IDTIPOENTRADA: "",
        D_FECHAHRAFIN: "",
        D_FECHAHRAINI: "",
        I_EDAD: "",
        I_CANTENTRADADEF: "",
        S_RANGO: "",
        S_USARLISTA: "",
        I_VALOR: "",
        S_IMAGEN: "",
        S_SEXO: "",
    });
    React.useEffect(() => {
        get_tbl_categoriaentradaById(id).then((response) => {
            console.log("response: ");
            console.log(response);
            console.log("categoria: ");
            console.log(categoria);
            setCategoria(response);
            console.log("categoria post: ");
            console.log(categoria);
        });
    }, [id]);
    const handleChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
        console.log(categoria);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(categoria);
        put_tbl_categoriaentrada(id, categoria).then((r) => {
            console.log(r);
            if (r.data.ok === true) {
                window.location.href = "/categoriaentrada";
            }
        });
    };
    if (!categoria) return null;
    return (
        <div className="main">
        <Main></Main>
        <div id="contenido-crear-editar-categoria">
        <h1 className="titulo-crear-update">Editar Categoria Entrada</h1>
        <form onSubmit={handleSubmit} className="form-new-update-categoria">
        <label>
        ID Categoria:
        </label>
        <input type="text" name="I_IDCATENTRADA" value={categoria.I_IDCATENTRADA} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        ID Tipo entrada:
        </label>
        <input type="text" name="I_IDTIPOENTRADA" value={categoria.I_IDTIPOENTRADA} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Nombre Categoria:
        </label>
        <input type="text" name="S_NBCATENTRADA" value={categoria.S_NBCATENTRADA} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Fecha y Hora Inicio:
        </label>
        <input type="text" name="D_FECHAHRAINI" value={categoria.D_FECHAHRAINI} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Fecha y Hora Fin:
        </label>
        <input type="text" name="D_FECHAHRAFIN" value={categoria.D_FECHAHRAFIN} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Cantidad Entrada Defecto:
        </label>
        <input type="text" name="I_CANTENTRADADEF" value={categoria.I_CANTENTRADADEF} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Edad:
        </label>
        <input type="text" name="I_EDAD" value={categoria.I_EDAD} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Sexo:
        </label>
        <input type="text" name="S_SEXO" value={categoria.S_SEXO} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Rango
        </label>
        <input type="text" name="S_RANGO" value={categoria.S_RANGO} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Usar Lista:
        </label>
        <input type="text" name="S_USARLISTA" value={categoria.S_USARLISTA} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Valor:
        </label>
        <input type="text" name="I_VALOR" value={categoria.I_VALOR} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Imagen:
        </label>
        <input type="text" name="S_IMAGEN" value={categoria.S_IMAGEN} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <button type="submit">Actualizar Categoria Entrada</button>
        </form>
        </div>
        </div>
    );
}

export default Update_categoriaEntrada;
