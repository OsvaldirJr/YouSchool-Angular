import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public states : any[] = [{nome: 'Acre', id: 'Acre'},{nome: 'Alagoas', id: 'AL'}, {nome: 'Amapá', id: 'AP'}, {nome: 'Amazonas', id: 'AM'}, {nome: 'Bahia', id: 'BA'}, {nome: 'Ceará', id: 'CE'}, {nome: 'Espírito Santo', id: 'ES'}, {nome: 'Goiás', id: 'GO'}, {nome: 'Maranhão', id: 'MA'}, {nome: 'Mato Grosso', id: 'MT'}, {nome: 'Mato Grosso do Sul', id: 'MSs'}, {nome: 'Minas Gerais', id: 'MG'}, {nome: 'Pará', id: 'PA'}, {nome: 'Paraíba', id: 'PB'}, {nome: '@', id: '#'}];
  
}



