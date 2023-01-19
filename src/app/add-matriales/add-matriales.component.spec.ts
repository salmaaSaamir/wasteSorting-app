import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatrialesComponent } from './add-matriales.component';

describe('AddMatrialesComponent', () => {
  let component: AddMatrialesComponent;
  let fixture: ComponentFixture<AddMatrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatrialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMatrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
