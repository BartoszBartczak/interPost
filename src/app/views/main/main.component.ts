import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts';
import { postsMock } from 'src/app/posts.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  posts: Post[] = postsMock;

  constructor(public dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(FormComponent)
  }

  ngOnInit(): void {
  }

}
