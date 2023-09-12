// The workspace can be seen as School, Institute or whatever.

import { IUserRole } from "./user";

export interface IWorkspace {
    name: string;
    properties?: {};
    users?: [{
        user: string,
        role: IUserRole | IUserRole[];
    }];
    groups?: string[];
}