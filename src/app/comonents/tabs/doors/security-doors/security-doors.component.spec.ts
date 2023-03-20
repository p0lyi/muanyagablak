import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDoorsComponent } from './security-doors.component';

describe('SecurityDoorsComponent', () => {
  let component: SecurityDoorsComponent;
  let fixture: ComponentFixture<SecurityDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDoorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
