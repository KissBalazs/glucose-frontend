import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseLevelsTableComponent } from './glucose-levels-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GlucoseLevelsService} from '../../services/glucose-levels.service';
import {of} from 'rxjs';

describe('GlucoseLevelsTableComponent', () => {
  let component: GlucoseLevelsTableComponent;
  let fixture: ComponentFixture<GlucoseLevelsTableComponent>;
  class gluckoseMock {
    getTableData(){
      // todo: this would be the perfect place to put test data to mimic rest communication.
      const mockedData = null;

      return of(mockedData)
    }


  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers: [
        { provide: GlucoseLevelsService, useClass: gluckoseMock },
      ],
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
