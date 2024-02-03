import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrederasComponent } from './correderas.component';

describe('CorrederasComponent', () => {
  let component: CorrederasComponent;
  let fixture: ComponentFixture<CorrederasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrederasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrederasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
