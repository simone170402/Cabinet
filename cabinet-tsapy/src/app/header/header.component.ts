import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const topHeader = this.elRef.nativeElement.querySelector('.top-header');
    const mainHeader = this.elRef.nativeElement.querySelector('.main-header');
    const mainHeaderOffset = mainHeader.offsetTop + mainHeader.offsetHeight;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= mainHeaderOffset) {
        topHeader.classList.add('fixed-header');
      } else {
        topHeader.classList.remove('fixed-header');
      }
    });
  }
}
