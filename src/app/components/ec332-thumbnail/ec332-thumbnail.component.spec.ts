import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec332ThumbnailComponent } from './ec332-thumbnail.component';

describe('Ec332ThumbnailComponent', () => {
  let component: Ec332ThumbnailComponent;
  let fixture: ComponentFixture<Ec332ThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ec332ThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec332ThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
