import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdmItemComponent } from './ndm-item.component';

describe('NdmItemComponent', () => {
  let component: NdmItemComponent;
  let fixture: ComponentFixture<NdmItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NdmItemComponent]
    });
    fixture = TestBed.createComponent(NdmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
