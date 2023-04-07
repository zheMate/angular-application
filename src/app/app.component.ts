import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';
import { Form, FormArray, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';


export class Phone {
    constructor(
        public title: string,
        public price: number,
        public company: string) { }
}


class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    title: string = "";
    price: number = 0;
    company: string = "";
    myForm: FormGroup;
    user: User;
    users: User[] = [];
    constructor(private httpService: HttpService) {
        this.myForm = new FormGroup({
            "userName": new FormControl("Tom", [Validators.required]), 
            "userEmail": new FormControl("", [
                Validators.required,
                Validators.email
            ]),
            "phones": new FormArray([
                new FormControl("+7", Validators.required)
            ])
        });
    }
    ngOnInit(){
        this.httpService.getJSONData('assets/user.json').subscribe({next:(data:any)=>this.user=new User(data.cozyName, data.cozyAge)});
        this.httpService.getJSONData('assets/users.json').subscribe({next:(data:any)=>this.users = data["cozyList"]});
        this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
    }
    getFormsControls() : FormArray{
        return this.myForm.controls['phones'] as FormArray;
    }
    addPhones() {
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    }
    submit() {
        console.log(this.myForm);
    }
    userNameValidator(control: FormControl): {[s: string]:boolean}|null {
        if(control.value === "нет"){
            return { "UserName": true };
        }
        return null;
    }
    userName: string = "";
    userEmail: string = "";
    userPhone: string = "";

    onSubmit(form: NgForm) {
        console.log(form);
    }
    phone: Phone = new Phone("", 0, "");
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
   
    onTitleChange() {
        if (this.phone.title == "нет")
            this.phone.title = "неизвестно";
    }
    text: string = "";
    clicks: number = 0;
    onChanged(increased: any) {
        increased == true ? this.clicks++ : this.clicks--;
    }
    age: number = 24;
    name: string = "Вася";
    items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 },
        ];
    addItem(text: string, price: number): void {
        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    }
}