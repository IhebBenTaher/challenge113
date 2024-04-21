import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedoctorComponent } from './homedoctor.component';

describe('HomedoctorComponent', () => {
  let component: HomedoctorComponent;
  let fixture: ComponentFixture<HomedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomedoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
