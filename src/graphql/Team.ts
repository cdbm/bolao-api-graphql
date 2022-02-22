import { objectType } from "nexus";

export const Team = objectType({
    name: "Team",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("name");
        t.nonNull.string("server");
        t.field("league", {
            type: "League",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).league();
            }
        })

        t.list.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).players();
            }
        })

        t.field("season", {
            type: "Season",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).Season();
            }
        })

        t.list.field("homeGame", {
            type: "Game",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).homeGame();
            }
        })

        t.list.field("awayGame", {
            type: "Game",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).awayGame();
            }
        })

        t.list.field("wins", {
            type: "Game",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).wins();
            }
        })

        t.list.field("guesses", {
            type: "Guess",
            resolve(parent, args, context) {
                return context.prisma.team.findUnique({
                    where: { id: parent.id }
                }).guesses();
            }
        })
    }
})