import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlterarNoticiaComponent } from './admin-alterar-noticia.component';

describe('AdminAlterarNoticiaComponent', () => {
  let component: AdminAlterarNoticiaComponent;
  let fixture: ComponentFixture<AdminAlterarNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlterarNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlterarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
