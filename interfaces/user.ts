// If modify User interface, you must to modify User Schema Model.

export interface IUser {
    _id?: string;
    firstName: string;
    lastName : string;
    password?: string;
    email    : string;
    workspaces: [{
        workspace: string;
        role: IUserRole[];
    }],
    groups?: [{ group: string, role: IUserRole }];

    createdAt?: string;
    updatedAt?: string;
}

export type IUserRole = 'staff' | 'teacher' | 'student' | 'family';