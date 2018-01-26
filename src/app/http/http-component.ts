import { Injectable, Component, OnInit, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class httpServer implements OnInit {

    constructor(private http: HttpClient) {

    }
    ngOnInit() {

    }
    show(options = {}) {
        return this.http.get("mock-data/json.json", options);
    }
    post() {
        return this.http.post("api", {})
    }
}

// 响应体的类型检查
// interface ItemsResponse {
//     results: string[];
// }
// http.get<ItemsResponse>('/api/items').subscribe(data => {
// data is now an instance of type ItemsResponse, so you can do this:
//   this.results = data.results;
// });
// 读取完整的响应体
// http.get<MyJsonData>('/data.json', {observe: 'response'})
// 错误处理
// 可以在.subscribe()调用中添加一个错误处理器：
// subscribe 第一个参数是响应成功的回调。第二个参数是错误的回调

// http.get<ItemsResponse>('/api/items').subscribe(
//     data => {...},
//     (err: HttpErrorResponse) => {
//         if (err.error instanceof Error) {
//             // A client-side or network error occurred. Handle it accordingly.
//             console.log('An error occurred:', err.error.message);
//         } else {
//             // The backend returned an unsuccessful response code.
//             // The response body may contain clues as to what went wrong,
//             console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
//         }
//     }
// );


// .retry() 操作符 重试这次请求
// import 'rxjs/add/operator/retry';
// http.get<ItemsRespnse>("/api")
// .retry()
// .subscribe()


// 请求非 JSON 数据 {responseType: 'text'}
// http.get('/textfile.txt', {responseType: 'text'})
// .subscribe(data => console.log(data));

// 发起一个 POST 请求
// http.post('/api/developers/add', body).subscribe(...);

// 发两次请求
// const req = http.post('/api/items/add', body);
// req.subscribe();
// req.subscribe();


// header 请求头
// http.post("api", {}, {
//     headers: new HttpHeaders().set('Authorization', 'my-auth-token')
// })
// .subscribe()

// URL 参数
// http.post('/api/items/add', body, {
//     params: new HttpParams().set('id', '3'),
// })
// .subscribe();
//   会往 URL /api/items/add?id=3 上发送一个 POST 请求。