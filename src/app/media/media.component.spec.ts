import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should return mean=550.6 with the data', () => {
    const jsonData = {
      "data": [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]
  };
  
  const data = jsonData.data;
    const component = new MediaComponent();
    const result = component.calculateAverage(data);

    expect(result).toBe(550.6);
});

it('Should return mean=60.32 with the data', () => {
  const jsonData = {
    "data": [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
};

const data = jsonData.data;
  const component = new MediaComponent();
  const result = component.calculateAverage(data);

  expect(result).toBe(60.32);
});
});
