import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiradoresPerillasComponent } from './tiradores-perillas.component';

describe('TiradoresPerillasComponent', () => {
  let component: TiradoresPerillasComponent;
  let fixture: ComponentFixture<TiradoresPerillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiradoresPerillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiradoresPerillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
