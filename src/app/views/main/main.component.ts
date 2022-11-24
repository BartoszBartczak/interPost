import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts';
import { postsMock } from 'src/app/posts.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  posts: Post[] = postsMock;

  ngOnInit(): void {
  }

}
