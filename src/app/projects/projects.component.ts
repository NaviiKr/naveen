import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Fat-Eat',
      description: 'Users can browse through a variety of food recipes and also has the ability to search for a particular recipe. Routing is done with React Router Dom and state management through Redux. Front end tech used ReactJS',
      image: '../../assets/images/eat.png',
      link: 'https://soft-buttercream-236618.netlify.app/',
      tags: ['ReactJs', 'CSS', 'JavaScript']
    },
    {
      title: 'ProjectVault',
      description: 'Users can search for a project to work upon for a particular topic and also have the ability to upload their own projects to show when signed in. All the data is stored in MongoDB and the backend is managed by Node and Express. Front end :- HTML, Tailwind CSS, JavaScript, React, Redux Toolkit.',
      image: '../../assets/images/project.png',
      link: 'https://project-vault-umber.vercel.app/',
      tags: ['ReactJs', 'MongoDB', 'JavaScript']
    },
    {
    title: 'Song-Recommender',
    description: 'Developed a sophisticated Spotify recommender system leveraging collaborative filtering and deep learning techniques. The project utilized user listening history and song features to generate personalized music recommendations, enhancing user engagement and satisfaction with the platform',
    image: '../../assets/images/song.png',
    link: 'https://github.com/NaviiKr/Spotify-recommender-System',
    tags: ['Python', 'Machine Learning', 'Stream-lit']
    },
    {
      title: 'Todo List Website',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, CSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: '../../assets/images/todo.png',
      link: 'https://to-do-list-nep.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
