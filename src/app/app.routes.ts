import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component: TaskListComponent},
    {path: 'taskDetails', title: 'Detalhes da Tarefa', component: TaskListComponent},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'}
];
