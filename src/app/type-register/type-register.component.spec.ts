import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRegisterComponent } from './type-register.component';

describe('TypeRegisterComponent', () => {
  let component: TypeRegisterComponent;
  let fixture: ComponentFixture<TypeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
