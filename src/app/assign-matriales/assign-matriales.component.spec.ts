import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMatrialesComponent } from './assign-matriales.component';

describe('AssignMatrialesComponent', () => {
  let component: AssignMatrialesComponent;
  let fixture: ComponentFixture<AssignMatrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignMatrialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignMatrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
