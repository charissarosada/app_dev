import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianmanagementComponent } from './librarianmanagement.component';

describe('LibrarianmanagementComponent', () => {
  let component: LibrarianmanagementComponent;
  let fixture: ComponentFixture<LibrarianmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrarianmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrarianmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
