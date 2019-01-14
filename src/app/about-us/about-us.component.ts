import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service'

@Component({
  selector: 'about',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  team:any[] = []

  constructor(private _service: TeamService) {
    this.team = _service.retrieveTeam()
  }

  ngOnInit() {
  }

}
