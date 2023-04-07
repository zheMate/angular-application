import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


export class Phone {
    constructor(
        public title: string,
        public price: number,
        public company: string)
    { }
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
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = "";
    price: number = 0;
    company: string = "";
    phone: Phone = new Phone("", 0, "");
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    addPhone(title:NgModel, price: NgModel, comp: NgModel) {
        console.log(title);
        console.log(price);
        console.log(comp);
    }
    onTitleChange(){
        if(this.phone.title == "нет")
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