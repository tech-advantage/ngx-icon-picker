import {TestBed, waitForAsync} from '@angular/core/testing';
import { AppBulmaComponent } from './app.bulma.component';
describe('AppBulma', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppBulmaComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppBulmaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Icon Picker Example'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppBulmaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Icon Picker Example');
  }));
});
