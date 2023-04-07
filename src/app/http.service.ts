import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    errorMessage: String = "";
    constructor(private http: HttpClient) { }
    getSum(num1: number, num2: number){
        const params = new HttpParams()
        .set('num1', num1.toString())
        .set('num2', num2.toString());
        return this.http.get('http://localhost:3000/sum', {params});
    }
    getJSONData(link: string) {
        return this.http.get(link);
    }
    postData(user: User){
        const body = {cozyName: user.cozyName, cozyAge: user.cozyAge};
        return this.http.post('http://localhost:3000/postuser', body);
    }
    getUsers() : Observable<User[]> {
        return this.http.get('assets/usersP.json').pipe(map((data:any)=> {
            let cozyList = data["cozyList"];
            return cozyList.map(function(user: any): User {
                return new User(user.userName, user.userAge)
            });
        }),
        catchError(err => {
            console.log(err);
            this.errorMessage = err.message;
            return [];
        }))
    };
}