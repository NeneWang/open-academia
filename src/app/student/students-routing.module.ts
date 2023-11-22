import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'courses',
                loadChildren: () =>
                import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
            },
            {
                path: 'students',
                loadChildren: () =>
                import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
            }
        ])
    ],
    exports: [RouterModule]
})

export class StudentsRoutingModule { }




