import { createContext } from "react";

export const GlobalContext = createContext({});

//funcao responsavel por enviar os dados que a gente quiser compartilhar com todas as telas
export function InfoProvider({ children }) {
    return (
        <GlobalContext.Provider value={{ valor: 150 }}>
            {children}
        </GlobalContext.Provider>
    );
}