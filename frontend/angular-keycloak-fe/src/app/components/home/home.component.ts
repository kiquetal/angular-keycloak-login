import {Component, OnInit} from '@angular/core';
import {MyKeycloakService} from "../../services/keycloak.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private keycloakService: MyKeycloakService) {}
  protected profile: any;
  ngOnInit(): void {


    this.keycloakService.getUserProfile().then((profile) => {
      console.log(profile)
      this.profile = JSON.stringify(profile, null, 2)
    } )

    this.keycloakService.getToken().then((token) => {
      console.log(token)
    } )

  }


}
