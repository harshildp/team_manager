import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: Player[];
  gameNum: Number;

  constructor(private _playerService: PlayerService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this._playerService.getAll(players => this.players = players)      
  }

  ngOnInit() {
    this._route.params.subscribe(param => {
      this.gameNum = param.id
    })
  }

  status(id, game, stat) {
    this._playerService.status(id, game, stat, result => {
      console.log(result)
      this.players = result;
    });
  }
}
