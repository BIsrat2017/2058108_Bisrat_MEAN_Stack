import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingPortfolioComponent } from './amazing-portfolio.component';

describe('AmazingPortfolioComponent', () => {
  let component: AmazingPortfolioComponent;
  let fixture: ComponentFixture<AmazingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
