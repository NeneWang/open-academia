import { Pipe, PipeTransform } from '@angular/core';
import { User, UserAverage, UserEmbeddedUserCourses } from 'src/app/academia/models';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: User | UserAverage | UserEmbeddedUserCourses | null | undefined ): string {
    if (!value) return '';
    
    return `${value?.first} ${value?.last}`;
  }

}
