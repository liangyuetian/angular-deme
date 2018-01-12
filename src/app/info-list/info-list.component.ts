import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-info-list',
    templateUrl: './info-list.component.html',
    styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnChanges {

    constructor() { }
    _list: Array<object>;
    test: string = "我是子组件的test属性";
    @Input() name: object;
    @Input()
    set list(list: Array<object>) {
        this._list = (list.length > 0 && list) || [{}]
    }
    get list(): Array<object> {
        return this._list
    }
    @Output() onVoted = new EventEmitter<any>()
    ngOnInit() {

    }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        console.log(changes.list);
    }
    vote($event, item: { [propName: string]: any }) {
        console.log(item);
        this.onVoted.emit({
            $event, item
        });
    }
}
