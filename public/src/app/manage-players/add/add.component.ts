import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';
import { Player } from '../../player';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPlayer: Player;

  constructor(private _playerService: PlayerService, private _router: Router) {
    this.newPlayer = new Player();
  }

  ngOnInit() {
  }

  add(){
    this._playerService.add(this.newPlayer, cb => {
      this.newPlayer = new Player();
      this._router.navigate(['/players/list']);
    })
  }
}
