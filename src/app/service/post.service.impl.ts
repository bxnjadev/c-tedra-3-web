import { Observable } from "rxjs";
import { Post } from "../model/post";
import { PostService } from "./post.service";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class PostServiceImpl implements PostService {

    private httpClient : HttpClient = inject(HttpClient);
    private urlBase : string = "http:"

    publish(title: string, date: string, image: File): Observable<Post> {

        var formData = new FormData();
        formData.append("title", title);
        formData.append("date", date);
        formData.append("file", image);

        return this.httpClient.post<Post>(this.urlBase + "/posts/", formData);
    }
    all(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.urlBase + "/posts/");
    }
    
}