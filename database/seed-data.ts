import bcrypt from 'bcryptjs';
import { IActivity, IGroup, IWorkspace } from "@/interfaces";
import { IGrade } from "@/interfaces/grades";

interface seedData {
    users: SeedUser[],
    workspace: IWorkspace[],
    groups: IGroup[],
    activities: IActivity[],
    grades: IGrade[],
}

interface SeedUser {
    firstName: string;
    lastName : string;
    password?: string;
    email    : string;
    workspaces: [{
        workspace: string;
        role: IUserRole[];
    }],
    groups?: [{ group: string, role: IUserRole }];
}

type IUserRole = 'staff' | 'teacher' | 'student' | 'family';

export const initialData: seedData = {
    users: [
        {
            firstName: 'Yessica Natacha',
            lastName: 'Villa Soler',
            email: 'yessica@google.com',
            password: bcrypt.hashSync('123456'),
            workspaces: [{ workspace: '', role: ['teacher'] }],
            groups: [{ group: '', role: 'teacher' }]
        },
        {
            firstName: 'ANDRES FELIPE',
            lastName: 'AGUDELO LOPEZ',
            email: 'andres@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'MIGUEL ANGEL',
            lastName: 'ALZATE SANCHEZ',
            email: 'miguel@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'MIGUEL ANGEL',
            lastName: 'ARANGO BEDOYA',
            email: 'angel@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'EUDIMAR YANDRIS',
            lastName: 'BARRIOS ARAUJO',
            email: 'eudimar@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'JEFREEY ALENADRO',
            lastName: 'BOLAÑOS MARIN',
            email: 'jefreey@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'JUAN ESTEBAN',
            lastName: 'BRAVO LONDOÑO',
            email: 'esteban@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'YOSEYNI COROMOTO',
            lastName: 'CALDERON LAGUADO',
            email: 'yoseyni@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'JUAN SEBASTIAN',
            lastName: 'CAMARGO COLORADO',
            email: 'juanse@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'RUBEN DARIO',
            lastName: 'CASTILLO VALVERDE',
            email: 'ruben@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'FRANCO MESA',
            lastName: 'JEIVERSON ALBERTO',
            email: 'jeiverson@google.com',
            workspaces: [{ workspace: '', role: ['student'] }],
            groups: [{ group: '', role: 'student' }]
        },
        {
            firstName: 'THOMAS',
            lastName: 'MONTOYA OSORIO',
            email: 'thomas@google.com',
            workspaces: [{ workspace: '', role: [ 'teacher', 'student' ] }],
            groups: [{ group: '', role: 'student' }]
        },
    ],
    workspace: [ { name: 'demo' }, { name: 'demo2' } ],
    groups: [
        {
            name: 'Física 10-01',
            tabs: [{
                name: 'Periodo 1',
                type: 'activities',        
            }],
        },
        {
            name: 'Física 10-02',
            tabs: [{
                name: 'Periodo 1',
                type: 'activities',        
            }],
        },
        {
            name: 'Física 10-03',
            tabs: [{
                name: 'Periodo 1',
                type: 'activities',        
            }],
        },
        {
            name: 'Matemáticas 10-01',
            tabs: [{
                name: 'Periodo 1',
                type: 'activities',        
            }],
        }
    ],
    activities: [
        {
            name: 'Actividad introductoria',
            type: 'normal',
        },
        {
            name: 'El origen del universo',
            type: 'normal',
        },
        {
            name: 'La materia',
            type: 'normal',
        }
    ],
    grades: [
        // First Activity
        { grade: '6.4', student: '' },
        { grade: '7.2', student: '' },
        { grade: '9.9', student: '' },
        { grade: '1.6', student: '' },
        { grade: '2.4', student: '' },
        { grade: '8.1', student: '' },
        { grade: '1.0', student: '' },
        { grade: '10.0', student: '' },
        { grade: '8.9', student: '' },
        { grade: '4.9', student: '' },
        { grade: '6.7', student: '' },
        // Second Activity
        { grade: '7.1', student: '' },
        { grade: '4.8', student: '' },
        { grade: '4.9', student: '' },
        { grade: '5.7', student: '' },
        { grade: '9.1', student: '' },
        { grade: '3.7', student: '' },
        { grade: '6.4', student: '' },
        { grade: '5.8', student: '' },
        { grade: '0.9', student: '' },
        { grade: '8.6', student: '' },
        { grade: '1.7', student: '' },
    ]
}