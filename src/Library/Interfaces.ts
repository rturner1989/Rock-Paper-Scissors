import { options } from "./Enums";

export type rockPaperScissors = {
    rock: selection;
    paper: selection;
    scissors: selection;
};

export type RockPaperScissorsLizardSpock = {
    rock: selection;
    paper: selection;
    scissors: selection;
    lizard: selection;
    spock: selection;
};

export type selection = {
    name: options;
    strength: options[];
    image: string;
};
