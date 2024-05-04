import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'pyp-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
