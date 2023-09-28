import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreinsightComponent } from './moreinsight.component';

describe('MoreinsightComponent', () => {
  let component: MoreinsightComponent;
  let fixture: ComponentFixture<MoreinsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreinsightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreinsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
