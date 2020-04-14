import { Component, OnInit, Input } from '@angular/core';
import Editor from 'cl-editor';
import * as $ from 'jquery';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  Publish = true;

  ngOnInit(): void {

    const editor = new Editor({
      target: document.getElementById('editor'),
      props: {
        height: '480px',
      }
    });

    $('.cl-button').attr('type', 'button');

  }

  

}
