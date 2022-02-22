import { objectType } from "nexus";

export const FriendLeague = objectType({
    name: "FriendLeague",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
    }
})