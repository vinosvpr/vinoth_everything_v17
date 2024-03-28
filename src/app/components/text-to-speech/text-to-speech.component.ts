import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-to-speech',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-to-speech.component.html',
  styleUrl: './text-to-speech.component.css',
})
export class TextToSpeechComponent {
  @ViewChild('textToSpeak') textToSpeak!: ElementRef<HTMLInputElement>;

  speak(): void {
    const text = this.textToSpeak.nativeElement.value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.lang = 'hi-IN';
    speech.rate = 1;
    speech.pitch = 1;

    // // Fetch all available voices
    // const voices = window.speechSynthesis.getVoices();

    // // Filter voices to select a female voice, assuming there is one available
    // const femaleVoice = voices.find((voice) => voice.name.includes('Female'));

    // if (femaleVoice) {
    //   speech.voice = femaleVoice;
    // }

    window.speechSynthesis.speak(speech);
  }
}

// js code
// var speech = new SpeechSynthesisUtterance();
//   function speak() {
//     speech.text = texttospeak.value;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     window.SpeechSynthesis.speak(speech);

//   }
