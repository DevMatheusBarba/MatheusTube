import React from "react";
import { StyledRegisterVideo } from "./styles";


function userForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value,

            });
        }
    };
}


export default function RegisterVideo() {
    const formCadastro = userForm({
        initialValues: { titulo: "God of ", url: "wwww.youtube...." }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)} >
                                X
                            </button>
                            <input
                                name="titulo"
                                placeholder="Titulo do video"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                name="url"
                                placeholder="Url do video"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}

