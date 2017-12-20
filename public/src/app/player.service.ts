import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class PlayerService {
  players: Player[];

  constructor(private _http: Http) { }

  getAll(cb) {
    this._http.get('/players').subscribe(
      res => { cb(res.json()); this.players = res.json() },
      err => console.log(err)
    )
  }

  add(player, cb) {
    this._http.post('/players/add', player).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    )
  }

  delete(id, cb) {
    this._http.delete(`/players/delete/${id}`).subscribe(
      res => {
        let idx = 0;
        for (let i = 0; i < this.players.length; i++) {
          if (this.players[i]._id == id) {
            idx = i;
            break;
          }
        }
        this.players.splice(idx, 1);
        console.log(this.players)
        console.log(res.json())
        cb(this.players);
      },
      err => console.log(err)
    );
  }

  status(id, game, stat, cb) {
    let data = {
      playerId: id,
      gameNum: game,
      newStatus: stat
    }
    this._http.put('/players/update', data).subscribe(
      res => {
        let idx = 0;
        for (let i = 0; i < this.players.length; i++) {
          if (this.players[i]._id == id) {
            idx = i;
            break;
          }
        }
        this.players[idx].status[game - 1] = stat;
        console.log(res.json())
        console.log(this.players)
        cb(this.players);
      },
      err => console.log(err)
    )
  }
}
