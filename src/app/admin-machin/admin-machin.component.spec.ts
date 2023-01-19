import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMachinComponent } from './admin-machin.component';

describe('AdminMachinComponent', () => {
  let component: AdminMachinComponent;
  let fixture: ComponentFixture<AdminMachinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMachinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMachinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
