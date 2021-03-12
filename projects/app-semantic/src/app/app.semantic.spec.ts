import {TestBed, waitForAsync} from '@angular/core/testing';
import { AppSemanticComponent } from './app.semantic.component';
describe('AppSemantic', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppSemanticComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppSemanticComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Icon Picker Example'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppSemanticComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Icon Picker Example');
  }));
});
