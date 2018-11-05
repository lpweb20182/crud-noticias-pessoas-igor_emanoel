import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlterarAutorComponent } from './admin-alterar-autor.component';

describe('AdminAlterarAutorComponent', () => {
  let component: AdminAlterarAutorComponent;
  let fixture: ComponentFixture<AdminAlterarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlterarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlterarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
