import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from '../components/people-list.component';
import { PersonDetailsComponent } from '../components/person-details.component';

// Route config let's you map routes to components
const routes: Routes = [
    // map '/developers' to the people list component
    {
        path: 'developers',
        component: PeopleListComponent,
    },
    // map '/developers/:id' to person details component
    {
        path: 'developers/:id',
        component: PersonDetailsComponent
    },
    // map '/' to '/persodevelopersns' as our default route
    {
        path: '',
        redirectTo: '/developers',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(routes);