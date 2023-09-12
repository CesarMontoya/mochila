export interface IGroup {
    name: string;
    tabs?: [ ITab ];
    teachers?: [{
        teacher: string,
        role: 'teacher';
    }];
    students?: [{
        student: string,
        role: 'student';
    }]
}

interface ITab {
    _id?: string;
    name: string;
    type: 'attendance' | 'activities' | 'custom';
    activities?: string[];
}