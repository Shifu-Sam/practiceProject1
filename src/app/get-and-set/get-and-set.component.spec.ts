import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndSetComponent } from './get-and-set.component';

describe('GetAndSetComponent', () => {
  let component: GetAndSetComponent;
  let fixture: ComponentFixture<GetAndSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAndSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
