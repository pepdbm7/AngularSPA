import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service'

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team:any[] = []

  constructor(
    private route:ActivatedRoute,
    private _service:TeamService
  ) {
    this.route.params.subscribe(params => this.team = this._service.retrieveOne(params['id']))
  }

  ngOnInit() {
  }

}
