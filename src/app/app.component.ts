import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    protected calculatedHours: string = '0';
    protected startTime: string;
    protected endTime: string;
    protected freeTime: string = '30';

    onCalculate() {
        let startTimeDate = new Date();
        startTimeDate.setHours(+this.startTime.split(':')[0]);
        startTimeDate.setMinutes(+this.startTime.split(':')[1]);

        let endTimeDate = new Date();
        endTimeDate.setHours(+this.endTime.split(':')[0]);
        endTimeDate.setMinutes(+this.endTime.split(':')[1]);

        // Calculate the time difference in milliseconds
        let hoursTmp = endTimeDate.getTime() - startTimeDate.getTime();

        // Convert milliseconds to hours
        hoursTmp = hoursTmp / (1000 * 60 * 60);

        // Subtract free time
        hoursTmp -= +this.freeTime / 60; // Convert freeTime from minutes to hours

        // If calculated hours are negative, set them to 0
        if (hoursTmp < 0) {
            hoursTmp = 0;
        }

        // Assign the calculated hours to the variable
        this.calculatedHours = hoursTmp.toFixed(2);
    }
}
