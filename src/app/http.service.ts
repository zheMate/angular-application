import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
    getJSONData(link: string) {
        return this.http.get(link);
    }
}