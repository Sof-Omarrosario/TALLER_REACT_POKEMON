import React from "react";
import { usePokemon } from "../context/PokemonContext";

export const InventarioAvtivo: React.FC = () => {

    const {
        entrenadorActivo,
        eliminarPokemon,
        actualizarFavorito,
        mochilaActual
    } = usePokemon();

    if (!entrenadorActivo) {
        return (
            <div>
                <h3>NO HAY ENTRENADORES</h3>

                <p>
                    Asigne entrenador activo o Registre un entrenador,{' '}
                    <strong>Lo lamento</strong>
                </p>
            </div>
        );
    }

    return (
        <div className="banner-section">

            <header>
                <h2>
                    Mochilla de {entrenadorActivo.nombreCompleto}
                </h2>
            </header>

            <div className="grid-mochila">

                {mochilaActual.length > 0 ? (

                    mochilaActual.map((poke, index) => (

                        <div
                            key={poke.id}
                            className={`tarjeta-item ${
                                poke.esFavorito
                                    ? 'tarjeta-favorita'
                                    : ''
                            }`}
                        >

                            <span>
                                #{index + 1} de {mochilaActual.length}
                            </span>

                            <img
                                src={poke.image}
                                alt={poke.name}
                            />

                            <h4>{poke.name}</h4>

                            <p>{poke.type}</p>

                            <div className="panel-botones">

                                <button
                                    className={`btn-fav ${
                                        poke.esFavorito
                                            ? 'fav-activo'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        actualizarFavorito(poke.id)
                                    }
                                >
                                    {poke.esFavorito
                                        ? '✨ Favorito'
                                        : '🚪 Liberar'}
                                </button>

                                <button
                                    type="button"
                                    className="btn-eliminar"
                                    onClick={() =>
                                        eliminarPokemon(poke.id)
                                    }
                                >
                                    ELIMINAR
                                </button>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="mochila-vacia">

                        <p>
                            Tu mochila esta vacia actualmente
                        </p>

                        <p>
                            Vaya y capture pokemones
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};