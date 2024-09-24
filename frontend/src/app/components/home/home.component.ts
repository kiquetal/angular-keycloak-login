import {Component, OnInit} from '@angular/core';
import {MyKeycloakService} from "../../services/keycloak.service";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatDialog} from "@angular/material/dialog";
import {ProfileDialogComponent} from "../profile-dialog/profile-dialog.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardSubtitle,
    MatCardTitle,
    MatButton,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private keycloakService: MyKeycloakService,
              private dialog: MatDialog
  ) {}
  protected profile: any;
  private token = "";
  ngOnInit(): void {


    this.keycloakService.getUserProfile().then((profile) => {
      console.log(profile)
      this.profile = profile
    } )

    this.keycloakService.getToken().then((token) => {
      console.log(token)
      this.token = token
    } )

  }
  openProfileDIalog() {
     this.dialog.open(ProfileDialogComponent, {
       data: {
          profile: this.profile,
          token: this.token,
          refreshToken: this.keycloakService.getRefreshToken()
       }
     });
  }


  async logout() {
  await  this.keycloakService.logout()

  }
}
