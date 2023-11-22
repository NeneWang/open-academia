export type UserRole = 'ADMIN' | 'EMPLOYEE' | 'STUDENT';
export interface User {
    id: number;
    first: string;
    last: string;
    email: string;
    password: string;
    role: UserRole;
    token: string;
    avatar: string;
}

export interface LoginPayload {
    email: string | null;
    password: string | null;
}

export interface Course {
    /**
     * {
            "id": 1,
            "name": "Algorithms I",
            "description": "This course is an introduction to the design and analysis of algorithms. Topics include asymptotic notation, recurrences and recursion, analysis of algorithms, sorting algorithms, basic data structures, and graph algorithms.",
            "image": "https://i.ibb.co/k4bG2qF/algorithms-1.png",
            "category": "Computer Science",
            "intensity": "High",
            "credits": 4
        },
     */
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    intensity: string;
    credits: number;
};

export interface UserCourse{
    /**
     *  {
            "id": 1,
            "user_id": 1,
            "course_id": 1,
            "progress": 10,
            "status": "In Progress",
            "grade": 0,
            "start_date": "2023-01-01",
            "expire_date": "2023-05-01",
            "end_date": "-"
        }
     */
    id: number;
    user_id: number;
    course_id: number;
    progress: number;
    status: string;
    grade: number;
    start_date: string;
    expire_date: string;
    end_date: string;
}

export interface Section{
    /**
     * {
            "id": 1,
            "course_id": 1,
            "name": "Introduction to Algorithms",
            "description": "This section introduces the course and the topics that will be covered.",
            "completion_score": 0,
            "order": 1
        },
     */

    id: number;
    course_id: number;
    name: string;
    description: string;
    completion_score: number;
    order: number;
}

export interface UserSection{
    /**
     * {
            "id": 1,
            "user_course_id": 1,
            "section_id": 1,
            "total_score": 0
        }
     */
    id: number;
    user_course_id: number;
    section_id: number;
    total_score: number;
}

export interface Page{
    /**
     * {
            "id": 1,
            "section_id": 1,
            "title": "Introduction to Algorithms",
            "content_url": "https://www.youtube.com/embed/2SUvWfNJSsM",
            "has_submission": false
        }
     */
    id: number;
    section_id: number;
    title: string;
    content_url: string;
    has_submission: boolean;
}

export interface Path{
    /**
     * {
            "id": 1,
            "name": "Computer Science",
            "description": "This path introduces the fundamentals of computer science.",
            "requirements": [[1, 0]]
        }
     */
    id: number;
    name: string;
    description: string;
    requirements: number[][];
}






