import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirictivesComponent } from './directives.component';

describe('DirictivesComponent', () => {
  let component: DirictivesComponent;
  let fixture: ComponentFixture<DirictivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirictivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirictivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
