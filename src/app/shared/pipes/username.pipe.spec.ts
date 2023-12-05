import { UsernamePipe } from './username.pipe';
import { User, UserAverage, UserEmbeddedUserCourses } from 'src/app/academia/models';

describe('UsernamePipe', () => {
  let pipe: UsernamePipe;

  beforeEach(() => {
    pipe = new UsernamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the full name for User', () => {
    const user: User = {
      "id": 1,
      "first": "Bucky",
      "last": "Roberts",
      "email": "buckyroberts@mail.com",
      "password": "password1",
      "role": "ADMIN",
      "token": "",
      "avatar": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1700594112~exp=1700594712~hmac=5d7a5afc2a327d64e046bf43f816d0d1f98928253eb08eae7636a1917dbe3659"
    };
    expect(pipe.transform(user)).toBe('Bucky Roberts');
  });

  it('should return the full name for UserAverage', () => {
    const userAverage: UserAverage = {
      "id": 1,
      "first": "Bucky",
      "last": "Roberts",
      "email": "buckyroberts@mail.com",
      "password": "password1",
      "role": "ADMIN",
      "token": "",
      "avatar": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1700594112~exp=1700594712~hmac=5d7a5afc2a327d64e046bf43f816d0d1f98928253eb08eae7636a1917dbe3659",
      "score": 0
    };
    expect(pipe.transform(userAverage)).toBe('Bucky Roberts');
  });

  it('should return the full name for UserEmbeddedUserCourses', () => {
    const userEmbeddedUserCourses: UserEmbeddedUserCourses =
    {
      "id": 1,
      "first": "Bucky",
      "last": "Roberts",
      "email": "buckyroberts@mail.com",
      "password": "password1",
      "role": "ADMIN",
      "token": "",
      "avatar": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1700594112~exp=1700594712~hmac=5d7a5afc2a327d64e046bf43f816d0d1f98928253eb08eae7636a1917dbe3659",
      "usercourses": []
    };;
    expect(pipe.transform(userEmbeddedUserCourses)).toBe('Bucky Roberts');
  });

  it('should handle null and undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});