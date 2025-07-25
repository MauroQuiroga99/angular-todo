import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primer proyecto de Angular';
  tasks = signal(['instalar angular', 'crear proyecto', 'crear componentes']);
  name = signal('Mauro Quiroga');
  age = 25;
  disabled = true;
  img =
    'https://preview.redd.it/gold-ship-aura-farming-v0-2lyyp35z3eef1.jpeg?width=1070&format=pjpg&auto=webp&s=9b1e4b1ec808bc40ff69cb02a9aee5f4f83237ae';
  person = {
    name: 'Mauro',
    age: 25,
    avatar:
      'https://preview.redd.it/gold-ship-aura-farming-v0-2lyyp35z3eef1.jpeg?width=1070&format=pjpg&auto=webp&s=9b1e4b1ec808bc40ff69cb02a9aee5f4f83237ae',
  };

  clickHandler() {
    alert('Hola, has hecho click en el botón');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keyDaownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
