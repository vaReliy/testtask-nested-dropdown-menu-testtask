import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faUsers,
  faUserTag,
  faUserShield,
  faUserMd,
  faSnowman,
  faSnowflake,
  faSnowplow,
  faSkiing,
  faSkating,
  faSleigh,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NestedDropdownMenuComponent } from './components/nested-dropdown-menu/nested-dropdown-menu.component';
import { NdmItemComponent } from './components/nested-dropdown-menu/ndm-item/ndm-item.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [NestedDropdownMenuComponent, NdmItemComponent],
  imports: [CommonModule, NgbModule, FontAwesomeModule, RouterLink],
  exports: [NestedDropdownMenuComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faBars,
      faUsers,
      faUserTag,
      faUserShield,
      faUserMd,
      faSnowman,
      faSnowflake,
      faSnowplow,
      faSkiing,
      faSkating,
      faSleigh,
      faTimes
    );
  }
}
