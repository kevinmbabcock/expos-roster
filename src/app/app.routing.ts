import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddPlayerComponent } from './add-player/add-player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'player-details',
    component: PlayerDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/add-player',
    component: AddPlayerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
