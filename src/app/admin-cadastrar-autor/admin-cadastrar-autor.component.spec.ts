import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarAutorComponent } from './admin-cadastrar-autor.component';

describe('AdminCadastrarAutorComponent', () => {
  let component: AdminCadastrarAutorComponent;
  let fixture: ComponentFixture<AdminCadastrarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastrarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastrarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
