import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'Parcial2808';

 title = 'Parcial';
 
nombre:string = '';
paises:any = [
  {nombre: 'Hidrogeno', simbolo:'H'},
  {nombre: 'Nitrogeno', simbolo:'N', numero_atomico:'7',peso_atomico:'14,0067'},
  {nombre: 'Calcio', simbolo:'Ca', numero_atomico:'20',peso_atomico:'40,078'}

 
]

//simbolo:string='';
//numero_atomico:string='';
//peso_atomico:string='';

}
