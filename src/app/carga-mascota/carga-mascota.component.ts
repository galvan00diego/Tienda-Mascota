import { Component} from '@angular/core';
import { MascotaComponent } from '../mascota/mascota.component';



@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent{
  nombre:string;
  tipo:string;
  foto:string;
  mascota:MascotaComponent=new MascotaComponent();
// @Output() onsubmit=new EventEmitter<any>();
 

MiMascota:MascotaComponent;
listado:Array<MascotaComponent>=[];

// public submit(){
//   this.onsubmit.emit(this.mascota);
//   console.log(this.mascota);
//   this.mascota=new MascotaComponent('','','');
// }
guardar(Mimascota:MascotaComponent){
  console.log(this.mascota.nombre);
  this.listado.push(Mimascota);
  console.log(this.listado);
}



}
