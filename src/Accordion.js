import { useState } from "react";
import Voltar from "./Voltar";
import "./Accordion.css";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <>
            <h2 className="titulo-disc">Laboratório de Engenharia de Software</h2>
            <Panel
                title="Sobre"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                className="panel"
            >
                Integrar os sistemas de informação da empresa otimizando o 
                uso das bases de dados e dos recursos em rede.
            </Panel>
            <Panel
                title="Ementa"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                className="panel"
            >
                <span lang="pt-br">Desenvolvimento de um</span> software 
                <span lang="pt-br"> utilizando os conhecimentos adquiridos 
                ao longo do curso. A elaboração deve abordar as disciplinas 
                de requisitos, análise e projeto, implementação, implantação
                e gerência de projetos. O processo de desenvolvimento, assim
                como a técnica fica a critério de acordo entre professor e
                aluno. </span>
            </Panel>

            <Voltar caminho={"/atv05"}/>
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Mostrar conteúdo
                </button>
            )}
        </section>
    );
}