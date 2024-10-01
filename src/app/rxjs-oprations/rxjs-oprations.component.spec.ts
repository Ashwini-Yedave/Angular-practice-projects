import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOprationsComponent } from './rxjs-oprations.component';

describe('RxjsOprationsComponent', () => {
  let component: RxjsOprationsComponent;
  let fixture: ComponentFixture<RxjsOprationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOprationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOprationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
