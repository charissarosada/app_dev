import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowermanangementComponent } from './borrowermanangement.component';

describe('BorrowermanangementComponent', () => {
  let component: BorrowermanangementComponent;
  let fixture: ComponentFixture<BorrowermanangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowermanangementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrowermanangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
