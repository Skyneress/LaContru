import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RielesComponent } from './rieles.component';

describe('RielesComponent', () => {
  let component: RielesComponent;
  let fixture: ComponentFixture<RielesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RielesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RielesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
