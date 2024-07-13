import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, MatNavList,MatSidenav,MatSidenavContainer,MatSidenavContent],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item routerLink="home" routerLinkActive="active">Home</a>
          <a mat-list-item routerLink="dashboard" routerLinkActive="active">Dashboard</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: 100%;
    }
    .active {
      font-weight: bold;
    }
  `]
})
export class MainLayoutComponent {}
