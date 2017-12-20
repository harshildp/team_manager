import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './manage-players/list/list.component';
import { AddComponent } from './manage-players/add/add.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { GameComponent } from './manage-status/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players', component: ManagePlayersComponent, children: [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent }
  ]},
  { path: 'status', component: ManageStatusComponent, children: [
    { path: 'game/:id', component: GameComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
