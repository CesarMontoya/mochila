// If modify Activity interface, you must to modify Tab Schema Model.

export interface IActivity {
    name: string;
    type: 'normal' | 'group' | 'attendance';
    taps?: [Itaps];
    grades?: [String];
}

interface Itaps {
    groupId: string;
    tabId  : string;
}