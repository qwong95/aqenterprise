import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/billboard-notary.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'AQ Enterprise is a notary and interpreting company.', image: 'assets/billboard-notary.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'Mobile: (626) 322-7518.', image: 'assets/billboard-notary.jpg'}
  };
}
