import { Component } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';

  ngOnInit(): void {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles.js config loaded');
    })
  }
}
