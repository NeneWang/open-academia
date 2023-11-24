import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'users',
                loadChildren: () =>
                    import('./pages/users/users.module').then(
                        (m) => m.UsersModule
                    ),
            }, {
                path: 'courses',
                loadChildren: () =>
                    import('./pages/courses/courses.module').then(
                        (m) => m.CoursesModule
                    ),
            },

        ])
    ],
    exports: [RouterModule]
})

export class AdminRoutingModule { }




