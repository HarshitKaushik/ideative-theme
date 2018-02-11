import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaContainerComponent } from './idea-container.component';

describe('IdeaContainerComponent', () => {
  let component: IdeaContainerComponent;
  let fixture: ComponentFixture<IdeaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
