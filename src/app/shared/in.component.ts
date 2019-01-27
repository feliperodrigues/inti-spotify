import { Injectable } from '@angular/core';

@Injectable()
export class InComponent {

	public listGenres(genres: string[]): string[] {
		return genres.slice(0, 3);
	}

	public popularityLabel(popularity: number): string {
		if(popularity >= 80) { return 'top'; }
		if(popularity <= 79 && popularity >= 60) { return 'legal'; }
		if(popularity <= 59 && popularity >= 30) { return 'bom'; }
		if(popularity < 30) { return 'desconhecido'; }
	}

	public trackPopularityIcon(popularity: number): string {
		if(popularity >= 80) { return 'signal_cellular_4_bar'; }
		if(popularity <= 79 && popularity >= 60) { return 'signal_cellular_3_bar'; }
		if(popularity <= 59 && popularity >= 30) { return 'signal_cellular_2_bar'; }
		if(popularity < 30) { return 'signal_cellular_1_bar'; }

		return 'signal_cellular_0_bar';
	}

	protected smoothScroll() {
		const scrollToTop = window.setInterval(() => {
			const pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 35);
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 16);
	}

	protected trackDuration(duration: number) {
		if (!duration) {
			return ' ';
		}

		let returnString = '';

		const date = new Date( duration);
		const hours: any = date.getUTCHours();
		let minutes: any = date.getUTCMinutes();
		let seconds: any = date.getUTCSeconds();

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		returnString += minutes + ':' + seconds;

		return returnString;
	}
	
}
