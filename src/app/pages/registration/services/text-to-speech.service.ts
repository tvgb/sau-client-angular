import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  	providedIn: 'root'
})

export class TextToSpeechService {

	private readonly LANGUAGE = 'nb-NO';

	constructor(private tts: TextToSpeech) { }

	speak(speakText) {
		this.tts.speak({
			text: speakText,
			locale: this.LANGUAGE,
		});
	}

	speakNextRoute(route: string): void {
		this.tts.speak({
			text: route,
			locale: this.LANGUAGE
		});
	}

  	speakTotalCount(totalCount) {
		this.tts.speak({
		text: `${totalCount} sau` ,
			locale: this.LANGUAGE,
		});
	}

  	speakColor(colorCount, type) {
		this.tts.speak({
		text: `${colorCount} ${type} sau `,
			locale: this.LANGUAGE,
		});
	}

	speakType(typeCount, type) {
		this.tts.speak({
			text: `${typeCount} ${type}`,
			locale: this.LANGUAGE,
		});
	}

	speakCollar(collarCount, type) {
		this.tts.speak({
		text: `${collarCount} ${type} slips`,
			locale: this.LANGUAGE,
		});
	}

	speakRegistration(category) {
		this.tts.speak({
			text: `Registrer ${category}`,
			locale: this.LANGUAGE,
		});
	}
}
