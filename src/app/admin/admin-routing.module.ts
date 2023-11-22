import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'users',
                loadChildren: () =>
                    import('./pages/users/users.module').then(
                        (m) => m.UsersModule
                    ),
            },{
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




