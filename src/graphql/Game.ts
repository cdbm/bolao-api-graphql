import { objectType } from "nexus";

export const Game = objectType({
    name: "Game",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("gameType");
        t.nonNull.dateTime("date");
        t.nonNull.string("gameType");
        t.nonNull.string("homeTeamScore");
        t.nonNull.string("awayTeamScore");
    }
})