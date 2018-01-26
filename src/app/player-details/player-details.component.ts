import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailsComponent implements OnInit {
  playerId: string;
  playerToDisplay;
  playerToUpdate: Player;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService)
  { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    this.playerService.getPlayerById(this.playerId).subscribe(dataLastEmittedFromObserver => {
      this.playerToUpdate = dataLastEmittedFromObserver;
    });
    console.log(this.playerToDisplay);
  }

}
