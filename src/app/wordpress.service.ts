import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WordpressService {

  getAPIUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {
  }


  getAllPosts(): Observable<any> {
    return this
      .http
      .get(this.getAPIUrl);
  }

  createPost(title, content): Observable<any> {
    const _headers = new HttpHeaders();
    const headers = _headers
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');


    const body = {
      title: title,
      content: content
    }
    return this
      .http.post(this.getAPIUrl, body, {
        headers: headers,
        withCredentials: true
      });
  }
}
