import { objectType } from "nexus";

export const Guess = objectType({
    name: "Guess",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("scoreboardGuess");
    }
});