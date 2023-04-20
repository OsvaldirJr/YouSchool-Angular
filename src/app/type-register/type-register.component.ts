import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-type-register',
  templateUrl: './type-register.component.html',
  styleUrls: ['./type-register.component.scss']
})
export class TypeRegisterComponent {
  constructor(private router:  Router){}

  public navegateToProf(){
    console.log('prof')
    window.location.href = '//www.youtube.com/'
  }
  public navegateToAluno(){
    console.log('aluno')
  }
}
