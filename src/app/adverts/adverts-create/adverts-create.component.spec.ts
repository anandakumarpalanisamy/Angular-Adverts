import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsCreateComponent } from './adverts-create.component';

describe('AdvertsCreateComponent', () => {
  let component: AdvertsCreateComponent;
  let fixture: ComponentFixture<AdvertsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
