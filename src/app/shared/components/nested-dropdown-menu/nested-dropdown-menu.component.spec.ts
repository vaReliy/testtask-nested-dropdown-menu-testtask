import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedDropdownMenuComponent } from './nested-dropdown-menu.component';
import { SharedModule } from '../../shared.module';

describe('NestedDropdownMenuComponent', () => {
  let component: NestedDropdownMenuComponent;
  let fixture: ComponentFixture<NestedDropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [NestedDropdownMenuComponent],
    });
    fixture = TestBed.createComponent(NestedDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
