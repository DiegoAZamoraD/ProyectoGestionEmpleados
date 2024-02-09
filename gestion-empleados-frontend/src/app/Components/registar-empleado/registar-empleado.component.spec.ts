import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarEmpleadoComponent } from './registar-empleado.component';

describe('RegistarEmpleadoComponent', () => {
  let component: RegistarEmpleadoComponent;
  let fixture: ComponentFixture<RegistarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
