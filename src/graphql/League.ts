import { objectType } from "nexus";

export const League = objectType({
    name: "League",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("server");
    }
})