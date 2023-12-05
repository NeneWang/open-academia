import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Home | Academia");
  }

  featuredCourses = [
    {
      "id": 2,
      "name": "Algorithms II",
      "description": "This course advances the design and analysis of algorithms. Topics include amortized analysis, advanced data structures, randomized algorithms, and computational geometry.",
      "image": "https://i.ibb.co/F6dPRw2/algorithms-2.png",
      "category": "Computer Science",
      "intensity": "High",
      "credits": 4,
      "prequisites": [
        "Algorithms I"
      ]
    },
    {
      "id": 4,
      "name": "Introduction to Artificial Intelligence",
      "description": "Introduction to Artificial Intelligence explores the foundational principles and practices of artificial intelligence (AI), machine learning, and robotics. The course prepares students to analyze relationships, build agents, and create models relevant to AI problems. The prerequisites for this course are Introduction to Probability and Statistics as well as Data Structures and Algorithms II.",
      "image": "https://i.ibb.co/bRwjR1N/ai-intro.png",
      "category": "Computer Science",
      "intensity": "High",
      "credits": 4
    },
    {
      "id": 10,
      "name": "Discrete Mathematics II",
      "description": "Discrete Mathematics II addresses abstract, discrete, computational methods used in computer science. In particular, this class introduces searching and sorting algorithms; big-O estimates; number theory and cryptography; recursion and induction; counting and advanced counting techniques; discrete probability; and modeling computation. This course emphasizes applications in computer science. Discrete Mathematics I is a prerequisite for this course.",
      "image": "https://i.ibb.co/JRkhjS7/discrete-structures-2.png",
      "category": "Mathematics",
      "intensity": "High",
      "credits": 4
    },
  ]

}
