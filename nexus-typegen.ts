/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  FriendLeague: { // root type
    id: string; // String!
    name: string; // String!
  }
  Game: { // root type
    awayTeamScore: string; // String!
    date: NexusGenScalars['DateTime']; // DateTime!
    gameType: string; // String!
    homeTeamScore: string; // String!
    id: string; // String!
  }
  Guess: { // root type
    id: string; // String!
    scoreboardGuess: string; // String!
  }
  League: { // root type
    id: string; // String!
    name: string; // String!
    server: string; // String!
  }
  Mutation: {};
  Performance: { // root type
    id: string; // String!
    points: number; // Int!
  }
  Player: { // root type
    id: string; // String!
    name: string; // String!
    nick: string; // String!
    role: string; // String!
  }
  Query: {};
  Season: { // root type
    champion: string; // String!
    id: string; // String!
    year: string; // String!
  }
  Team: { // root type
    id: string; // String!
    name: string; // String!
    server: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  FriendLeague: { // field return type
    id: string; // String!
    name: string; // String!
  }
  Game: { // field return type
    awayTeamScore: string; // String!
    date: NexusGenScalars['DateTime']; // DateTime!
    gameType: string; // String!
    homeTeamScore: string; // String!
    id: string; // String!
  }
  Guess: { // field return type
    id: string; // String!
    scoreboardGuess: string; // String!
  }
  League: { // field return type
    id: string; // String!
    name: string; // String!
    server: string; // String!
  }
  Mutation: { // field return type
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Performance: { // field return type
    id: string; // String!
    points: number; // Int!
  }
  Player: { // field return type
    Team: NexusGenRootTypes['Team'] | null; // Team
    id: string; // String!
    name: string; // String!
    nick: string; // String!
    role: string; // String!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Season: { // field return type
    champion: string; // String!
    id: string; // String!
    year: string; // String!
  }
  Team: { // field return type
    id: string; // String!
    league: NexusGenRootTypes['League'] | null; // League
    name: string; // String!
    players: Array<NexusGenRootTypes['Player'] | null> | null; // [Player]
    season: NexusGenRootTypes['Season'] | null; // Season
    server: string; // String!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    friendLeagues: Array<NexusGenRootTypes['FriendLeague'] | null>; // [FriendLeague]!
    friendLeaguesOwned: Array<NexusGenRootTypes['FriendLeague'] | null>; // [FriendLeague]!
    id: string; // String!
    name: string; // String!
    performance: Array<NexusGenRootTypes['Performance'] | null>; // [Performance]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  FriendLeague: { // field return type name
    id: 'String'
    name: 'String'
  }
  Game: { // field return type name
    awayTeamScore: 'String'
    date: 'DateTime'
    gameType: 'String'
    homeTeamScore: 'String'
    id: 'String'
  }
  Guess: { // field return type name
    id: 'String'
    scoreboardGuess: 'String'
  }
  League: { // field return type name
    id: 'String'
    name: 'String'
    server: 'String'
  }
  Mutation: { // field return type name
    login: 'AuthPayload'
    signup: 'AuthPayload'
  }
  Performance: { // field return type name
    id: 'String'
    points: 'Int'
  }
  Player: { // field return type name
    Team: 'Team'
    id: 'String'
    name: 'String'
    nick: 'String'
    role: 'String'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Season: { // field return type name
    champion: 'String'
    id: 'String'
    year: 'String'
  }
  Team: { // field return type name
    id: 'String'
    league: 'League'
    name: 'String'
    players: 'Player'
    season: 'Season'
    server: 'String'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    friendLeagues: 'FriendLeague'
    friendLeaguesOwned: 'FriendLeague'
    id: 'String'
    name: 'String'
    performance: 'Performance'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}