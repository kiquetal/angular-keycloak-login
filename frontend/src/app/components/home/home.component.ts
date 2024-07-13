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
          token: this.token
       }
     });
  }


  async logout() {
  await  this.keycloakService.logout()

  }
}
