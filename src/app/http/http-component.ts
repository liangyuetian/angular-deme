import { Injectable, Component, OnInit, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export default class httpServer implements OnInit {

    constructor(private http: HttpClient) {

    }
    ngOnInit() {

    }
    show(options = {}) {
        return this.http.get("mock-data/json.json", options);
    }
}

