import { objectType } from "nexus";

export const Player = objectType({
    name: "Player",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("nick");
        t.nonNull.string("name");
        t.nonNull.string("role");
        t.field("Team", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.player.findUnique({
                    where: { id: parent.id }
                }).team();
            }
        });
    }
})