import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [PlayerService]
})
export class AddPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: string, position: string) {
    const newPlayer: Player = new Player(name, parseInt(age, 10), position);
    this.playerService.addPlayer(newPlayer);
  }

}
