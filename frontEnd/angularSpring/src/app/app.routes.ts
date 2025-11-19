import { Routes } from '@angular/router';
import { VisualizzaTasks } from './components/visualizza-tasks/visualizza-tasks';
import { PuntualeTask } from './components/puntuale-task/puntuale-task';
import { InserisciTask } from './components/inserisci-task/inserisci-task';
import { ModificaTask } from './components/modifica-task/modifica-task';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'task/visualizza',
        pathMatch: 'full'
    },
    {
        path:'task/visualizza',
        component: VisualizzaTasks,
    },
    {
        path:'task/visualizza/:codice',
        component: PuntualeTask,
    },
    {
        path:'task/inserisci',
        component: InserisciTask,
    },
    {
        path:'task/modifica/:codice',
        component: ModificaTask,
    }
];
