import { opponentType } from "./Enums";

export function showScore(
    player: opponentType | null,
    opponent: any,
    user: any
) {
    if (!player) {
        return (
            <div>
                <h3>Score vs Comp {opponent}</h3>
                <h3>Score vs Player {user}</h3>
            </div>
        );
    }
    if (player === opponentType.COMPUTER) {
        return (
            <div>
                <h3>Score vs Comp {opponent}</h3>
            </div>
        );
    }
    return (
        <div>
            <h3>Score vs Player {user}</h3>
        </div>
    );
}
