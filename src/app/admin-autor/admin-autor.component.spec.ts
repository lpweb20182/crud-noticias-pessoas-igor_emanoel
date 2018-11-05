import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutorComponent } from './admin-autor.component';

describe('AdminAutorComponent', () => {
  let component: AdminAutorComponent;
  let fixture: ComponentFixture<AdminAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
