import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  
  calculateAverage(data: number[]): number {
    if (data.length === 0) {
        return 0;
    }

    const sum = data.reduce((total, num) => total + num, 0);
    return sum / data.length;
}

}
