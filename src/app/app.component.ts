import {Component, OnInit} from '@angular/core';
import {WordpressService} from './wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wpPosts = [];
  title: string;
  content: string;

  constructor(private wordpress: WordpressService) {

  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this
      .wordpress
      .getAllPosts()
      .subscribe((data) => {
        console.log(`data is `, data);
        this.wpPosts = data;
      });
  }

  createPost() {
    this
      .wordpress
      .createPost(this.title, this.content)
      .subscribe((data) => {
        console.log(`data is `, data);
        this.wpPosts = data;
      });

  }
}
