import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepatientComponent } from './homepatient.component';

describe('HomepatientComponent', () => {
  let component: HomepatientComponent;
  let fixture: ComponentFixture<HomepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
