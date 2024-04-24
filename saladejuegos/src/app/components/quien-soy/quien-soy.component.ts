import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: 'quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {

}
