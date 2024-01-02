/// <reference types="node" resolution-mode="require"/>
import type { Query } from '../../syntax.js';
interface WOQLQuery {
    query: Query;
    all_witnesses?: boolean;
}
interface WoqlQueryOptions {
    allWitnesses?: boolean;
}
export declare function prepareWoqlQuery(woql: Query, options?: WoqlQueryOptions): WOQLQuery;
interface WoqlFileAttachments {
    [filename: string]: string;
}
interface WoqlHttpPostBodyOptions {
    allWitnesses?: boolean;
    attachments?: WoqlFileAttachments;
}
export declare const prepareWoqlHttpPostBody: (woql: Query, options?: WoqlHttpPostBodyOptions) => WOQLQuery | FormData;
export {};
