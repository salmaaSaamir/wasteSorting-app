import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatrialesComponent } from './list-matriales.component';

describe('ListMatrialesComponent', () => {
  let component: ListMatrialesComponent;
  let fixture: ComponentFixture<ListMatrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatrialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
