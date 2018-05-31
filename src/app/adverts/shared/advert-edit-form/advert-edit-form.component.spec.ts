import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertEditFormComponent } from './advert-edit-form.component';

describe('AdvertEditFormComponent', () => {
  let component: AdvertEditFormComponent;
  let fixture: ComponentFixture<AdvertEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
