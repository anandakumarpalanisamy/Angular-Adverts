import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsEmptyComponent } from './adverts-empty.component';

describe('AdvertsEmptyComponent', () => {
  let component: AdvertsEmptyComponent;
  let fixture: ComponentFixture<AdvertsEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
