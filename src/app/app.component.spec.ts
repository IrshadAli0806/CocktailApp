import {  TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CocktailApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CocktailApp');
  });

  it('should change title to Unit Test App', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    expect(fixture.nativeElement.querySelector('h1')
        .textContent).toEqual('Drinks Data');
}),100);
 
});
