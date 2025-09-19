import useJogoDoGalo from "./useJogoDoGalo";
import "./App.css";

export default function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo
    } = useJogoDoGalo();

    const vencedor = verificarVencedor(jogo);
    const jogoTerminado = verificarFimDoJogo(jogo);

    return (
        <div className="container">
            <div className="game-card">
                <h1 className="title">Tic-Tac-Toe</h1>

                <div className="status">
                    {jogoTerminado ? (
                        vencedor ? (
                            <p className="winner">🎉 Vencedor: {vencedor} 🎉</p>
                        ) : (
                            <p className="draw">🤝 Empate! 🤝</p>
                        )
                    ) : (
                        <p className="turno">
                            Turno:{" "}
                            <span
                                className={`player ${jogo.jogadorAtual === "X" ? "player-x" : "player-o"
                                    }`}
                            >
                                {jogo.jogadorAtual}
                            </span>
                        </p>
                    )}
                </div>

                {/* Mostrar el tablero solo si el juego NO terminó */}
                {!jogoTerminado && (
                    <div className="board">
                        {jogo.tabuleiro.map((linha, i) =>
                            linha.map((casa, j) => (
                                <button
                                    key={`${i}-${j}`}
                                    onClick={() => adicionarJogada(i, j)}
                                    disabled={casa !== " "}
                                    className={`cell ${casa}`}
                                    aria-label={`Casa ${i + 1}-${j + 1}`}
                                >
                                    {casa !== " " ? casa : ""}
                                </button>
                            ))
                        )}
                    </div>
                )}

                {/* Botón de reinicio → siempre visible */}
                <button className="btn-restart" onClick={reiniciarJogo}>
                    🔄 Novo Jogo
                </button>
            </div>
        </div>
    );
}
