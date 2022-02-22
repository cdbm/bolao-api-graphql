import { objectType } from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.dateTime("createdAt");
        t.nonNull.dateTime("updatedAt");
        t.nonNull.list.field("friendLeagues", {
            type: "FriendLeague",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({
                    where: { id: parent.id }
                }).friendLeagues();
            }
        });
        t.nonNull.list.field("friendLeaguesOwned", {
            type: "FriendLeague",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({
                    where: { id: parent.id }
                }).FriendLeaguesOwned();
            }
        })

        t.nonNull.list.field("performance", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({
                    where: { id: parent.id }
                }).Performance();
            }
        })
    }
})