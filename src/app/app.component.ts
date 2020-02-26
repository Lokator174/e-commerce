import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  categories = this.categoriesService.categories;
  
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener = () => this.changeDetectorRef.detectChanges();

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private categoriesService: CategoriesService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
