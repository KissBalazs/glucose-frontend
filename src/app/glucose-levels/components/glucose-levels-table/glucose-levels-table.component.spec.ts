import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseLevelsTableComponent } from './glucose-levels-table.component';

describe('GlucoseLevelsTableComponent', () => {
  let component: GlucoseLevelsTableComponent;
  let fixture: ComponentFixture<GlucoseLevelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseLevelsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseLevelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
