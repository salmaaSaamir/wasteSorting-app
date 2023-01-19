import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeMachineComponent } from './edite-machine.component';

describe('EditeMachineComponent', () => {
  let component: EditeMachineComponent;
  let fixture: ComponentFixture<EditeMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
