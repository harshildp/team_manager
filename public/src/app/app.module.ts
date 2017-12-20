import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayerService } from './player.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './manage-players/list/list.component';
import { AddComponent } from './manage-players/add/add.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { GameComponent } from './manage-status/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
