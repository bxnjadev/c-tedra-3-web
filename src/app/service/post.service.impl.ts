import { Observable } from "rxjs";
import { Post } from "../model/post";
import { PostService } from "./post.service";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Environment } from "../environment";

@Injectable({
    providedIn: 'root'
  })
export class PostServiceImpl implements PostService {

    private httpClient : HttpClient = inject(HttpClient);
    private urlBase : string  = Environment.url;

    publish(userId : string, title: string, date: string, image: File): Observable<Post> {

        var formData = new FormData();
        formData.append("Title", title);
        formData.append("DateCreated", date);
        formData.append("formFile", image);
        formData.append("UserId", userId);

        return this.httpClient.post<Post>(this.urlBase + "post/", formData);
    }
    all(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.urlBase + "post/");
    }
    
}