import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipping-cards';
  triggerPlane = "no"
  audio_played_already = 0;

  playAudio() {
    let plane_audio = new Audio();
    plane_audio.src = "../assets/plane_sound.wav"
    plane_audio.load();
    plane_audio.play();
    let cheer_audio = new Audio();
    cheer_audio.src = "../assets/cheer_sound.wav"
    cheer_audio.load();
    cheer_audio.play();
    let yay_audo = new Audio();
    yay_audo.src = "../assets/yay_sound.wav"
    yay_audo.load();
    yay_audo.play();
    let mariah = new Audio();
    mariah.src = "../assets/mariah_carey.mp3"
    mariah.load();
    mariah.play();
  }

  flyPlane(event) {
    this.triggerPlane = (this.triggerPlane == 'no') ? 'yes' : 'no';
    if (this.audio_played_already == 0){
      this.playAudio()
      this.audio_played_already += 1;
    }
  }
}
