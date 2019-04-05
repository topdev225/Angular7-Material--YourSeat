import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDocumentsComponent } from './home-documents.component';

describe('HomeDocumentsComponent', () => {
  let component: HomeDocumentsComponent;
  let fixture: ComponentFixture<HomeDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
