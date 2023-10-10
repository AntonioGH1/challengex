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
    const average = sum / data.length;

    // Redondear a 2 decimales
    const roundedAverage = Number(average.toFixed(2));

    return roundedAverage;
}

}
