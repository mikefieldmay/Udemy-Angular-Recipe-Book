import { HeaderComponent } from './header/header.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'app/auth/auth.service';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class AuthServiceStub {}

describe('AppComponent', () => {

  let authService;
  let component: AppComponent;
  let authSpy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    authService = new AuthService(null);
    component = new AppComponent(authService);
    authSpy = jasmine.createSpyObj('authSpy', ['onAuthStateChanged']);
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe( 'When the app is created', () => {

    it('should initialise a firebase app', () => {
      let spy = spyOn(firebase, 'initializeApp');
      let spy2= spyOn(firebase, 'auth').and.returnValue(authSpy);
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
    });

  });

  describe('onNavigate', () => {
    it('should change the loadedFeature value', () => {
      const newFeature = 'New Feature';
      component.onNavigate(newFeature);
      expect(component.loadedFeature).toBe(newFeature);
    });
  });

});
