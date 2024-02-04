import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaplatosComponent } from './lavaplatos.component';

describe('LavaplatosComponent', () => {
  let component: LavaplatosComponent;
  let fixture: ComponentFixture<LavaplatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavaplatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LavaplatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
