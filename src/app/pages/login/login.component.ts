import { Component, OnInit } from '@angular/core'
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./sass/login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {}


  ngOnInit(): void {
    this.verificationTokenUrlCallBack()
  }

  verificationTokenUrlCallBack() {
    this.spotifyService.TokenUrlCallBack
  }

  openPageLogin() {
    window.location.href = this.spotifyService.urlLogin()
  }

}
