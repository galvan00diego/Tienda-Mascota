import { Component, Input } from '@angular/core';
import {MascotaComponent} from '../mascota/mascota.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

 @Input() mascotas:Array<MascotaComponent>; 

mostrarMascota(mascota:MascotaComponent){
  console.log(mascota);
}
// agregarListado(mascota:MascotaComponent)
// {
//   this.mascotas.push(mascota);
// }
}
