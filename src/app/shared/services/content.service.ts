import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome to the homepage of AQ Enterprise!', content: 'Need service? You have come to the right place.', image: 'assets/fingerprint3.png'},
    'about': {title: 'About', subtitle: 'About Us', content: 'AQ Enterprise provides services for fingerprinting, notary, and interpretations. Interpretations are available in Spanish, Cantonese, and Mandarin.', image: 'assets/billboard-notary.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'Mobile: (626) 322-7518 \n Email: aqbusiness9395@gmail.com', image: 'assets/billboard-notary.jpg'}
  };
}
