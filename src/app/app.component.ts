import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-lync';
  // openBlankPage(): void {
  //   const newWindow = window.open('http://localhost:4200/start', '_blank');
  //   if (newWindow) {
  //     // Write content or load URL in the new window
  //     newWindow.document.write('<html><head><title>Blank Page</title></head><body style="background-color: black; color: white;"></body></html>');
  //     newWindow.document.close();
  //   } else {
  //     // Handle popup blocked error
  //     alert('Popup blocked. Please allow popups for this site.');
  //   }
  // }
}
