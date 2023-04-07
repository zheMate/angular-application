import { Component } from '@angular/core';

@Component({
    selector: 'data-comp',
    templateUrl:  './data.component.html',
    styleUrls: ['./data.component.css']
})

export class DataComponent{
    message: string = "DataModule";
}