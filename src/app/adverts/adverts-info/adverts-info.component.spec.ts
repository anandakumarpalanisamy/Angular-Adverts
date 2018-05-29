import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsInfoComponent } from './adverts-info.component';

describe('AdvertsInfoComponent', () => {
  let component: AdvertsInfoComponent;
  let fixture: ComponentFixture<AdvertsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
