import { Course, User, UserCourse } from 'src/app/academia/models';
export interface Enrollment extends UserCourse {
  user?: User;
  course?: Course;
}

export interface CreateEnrollmentPayload {
  courseId: number | null;
  userId: number | null;
}
