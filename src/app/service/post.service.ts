import { Observable } from "rxjs"
import { Post } from "../model/post"

export interface PostService {

    publish(title : string, 
        date : string, 
        image : File
    ) : Observable<Post>;

    all() : Observable<Post[]>;


}