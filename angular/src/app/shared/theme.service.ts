import { Injectable } from '@angular/core';

/**
 * Service to handle Material theme customization
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Our primary color from the custom theme
  readonly primaryColor = '#afcb54';
  readonly primaryLighter = '#d1e3a1';
  readonly primaryDarker = '#748a21';
  
  constructor() { }
  
  /**
   * Apply custom theme colors to specific elements
   */
  applyThemeColors(): void {
    // Apply the primary color to CSS variables
    document.documentElement.style.setProperty('--mat-primary', this.primaryColor);
    document.documentElement.style.setProperty('--mat-primary-lighter', this.primaryLighter);
    document.documentElement.style.setProperty('--mat-primary-darker', this.primaryDarker);
    
    // You can add more custom theming here if needed
  }
}
