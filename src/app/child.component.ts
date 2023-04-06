import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styles: [`h2, p {color:green;}`]
})
export class ChildComponent {
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }
    @Input() userName: string = "";
    _userAge: number = 0;
    @Input()
    set userAge(age:number) {
        if(age<0)
        this._userAge=0;
        else if(age>100)
        this._userAge = 100;
        else
        this._userAge = age;
    }
    get userAge() { return this._userAge; }
    name = "Данил";
    
}