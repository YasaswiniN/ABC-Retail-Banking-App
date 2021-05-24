import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpaymentsComponent } from './accountpayments.component';

describe('AccountpaymentsComponent', () => {
  let component: AccountpaymentsComponent;
  let fixture: ComponentFixture<AccountpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountpaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
