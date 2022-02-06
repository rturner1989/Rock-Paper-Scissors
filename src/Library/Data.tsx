import { options } from "./Enums";
import { selection } from "./Interfaces";

export const getSelectionBasic: selection[] = [
    {
        name: options.ROCK,
        strength: [options.SCISSORS],
        image: "./Images/icon-rock.svg",
    },
    {
        name: options.PAPER,
        strength: [options.ROCK],
        image: "./Images/icon-paper.svg",
    },
    {
        name: options.SCISSORS,
        strength: [options.PAPER],
        image: "./Images/icon-scissors.svg",
    },
];

export const getSelectionAdvanced: selection[] = [
    {
        name: options.ROCK,
        strength: [options.LIZARD, options.SCISSORS],
        image: "./Images/icon-rock.svg",
    },
    {
        name: options.PAPER,
        strength: [options.ROCK, options.SPOCK],
        image: "./Images/icon-paper.svg",
    },
    {
        name: options.SCISSORS,
        strength: [options.PAPER, options.LIZARD],
        image: "./Images/icon-scissors.svg",
    },
    {
        name: options.LIZARD,
        strength: [options.SPOCK, options.PAPER],
        image: "./Images/icon-lizard.svg",
    },
    {
        name: options.SPOCK,
        strength: [options.SCISSORS, options.ROCK],
        image: "./Images/icon-spock.svg",
    },
];
