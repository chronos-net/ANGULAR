import {Component} from "@angular/core";
@Component({
  selector:'empleado',
  templateUrl:'./empleado.component.html'
})
export class EmpleadoComponent{
  title = 'COMPONENTES DE EMPLEADO';
  public nombre_empleado="COMPONENTE EMPLEADO";
  public lista_empleados="JUAN,JOSE,PEDRO,DIANA";
}
