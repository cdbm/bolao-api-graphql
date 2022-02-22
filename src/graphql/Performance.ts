import { objectType } from "nexus";

export const Performance = objectType({
    name: "Performance",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.int("points");
    }
})