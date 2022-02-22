import { objectType } from "nexus";

export const Season = objectType({
    name: "Season",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("year");
        t.nonNull.string("champion");
    }
})