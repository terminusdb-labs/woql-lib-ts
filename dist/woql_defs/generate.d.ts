export interface WOQLDefinition {
    name: string;
    group: string;
    funName: string;
    fields: string[];
    types: string[];
    args: string[];
}
export type WOQLSchema = {
    [K in string]: WOQLDefinition;
};
export declare const woqlSchema: WOQLSchema;
export declare function optionType(s: string): string | null;
export declare function generateWoql(): Promise<void>;
