import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

  team:any[] = [
    {
      name: 'Pep',
      speciality: 'Vanilla JS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet similique suscipit repellendus itaque. Consequatur laboriosam maiores ex dolor sint nihil cum eligendi illo asperiores.'
    },
    {
      name: 'Yusuf',
      speciality: 'CSS, Bootstrap, SASS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet similique suscipit repellendus itaque. Consequatur laboriosam maiores ex dolor sint nihil cum eligendi illo asperiores.'
    },
    {
      name: 'Josep',
      speciality: 'React-Angular',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet similique suscipit repellendus itaque. Consequatur laboriosam maiores ex dolor sint nihil cum eligendi illo asperiores.'
    }
  ]

  constructor() { 
  }

  //create a method to return the team:
  retrieveTeam() {
    return this.team
  }

  //method to return clicked team member (adding index to the route: ...about/index):
  retrieveOne(index) {
    return this.team[index]
  }
  
}
