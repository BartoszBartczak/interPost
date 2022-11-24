import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts';
import { postsMock } from 'src/app/posts.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  posts: Post[] = postsMock;

  ngOnInit(): void {
  }

}
