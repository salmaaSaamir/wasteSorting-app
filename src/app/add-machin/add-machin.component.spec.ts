import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachinComponent } from './add-machin.component';

describe('AddMachinComponent', () => {
  let component: AddMachinComponent;
  let fixture: ComponentFixture<AddMachinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMachinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMachinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
