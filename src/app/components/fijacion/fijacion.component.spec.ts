import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FijacionComponent } from './fijacion.component';

describe('FijacionComponent', () => {
  let component: FijacionComponent;
  let fixture: ComponentFixture<FijacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FijacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FijacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
