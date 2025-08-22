import { Component, OnInit } from '@angular/core';
import { LoaderBarComponent } from '@abp/ng.theme.shared';
import { AppLayoutComponent } from './layout/app-layout.component';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <app-layout></app-layout>
  `,
  standalone: true,
  imports: [LoaderBarComponent, AppLayoutComponent]
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Apply material theme colors
    this.themeService.applyThemeColors();
  }
}
