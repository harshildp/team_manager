import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[];

  constructor(private _playerService: PlayerService) {
    this._playerService.getAll(players => this.players = players)
  }

  ngOnInit() {
  }

  delete(id) {
    this._playerService.delete(id, result => {
      console.log(result)
      this.players = result;
    });
  }
}
