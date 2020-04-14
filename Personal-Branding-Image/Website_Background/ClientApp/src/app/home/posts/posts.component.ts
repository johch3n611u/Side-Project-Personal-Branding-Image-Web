import { Component, OnInit, Input } from '@angular/core';
import Editor from 'cl-editor';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  template: `
    <div class="posts">
    <mat-card>
        <div class="posts_title">
          <mat-card-title>{{title}}</mat-card-title>
            <button type="text" mat-button form="posts">Submit</button>
        </div>
        <mat-card-content>
            <form id="posts" [formGroup]="form" (ngSubmit)="submit()">
                <p>
                    <mat-form-field>
                        <input type="text" matInput placeholder="Sort" formControlName="Sort">
                    </mat-form-field>
                    <mat-form-field>
                        <input type="text" matInput placeholder="ImgUrl" formControlName="ImgUrl">
                    </mat-form-field>
                </p>
                <p>
                    <mat-form-field>
                        <input type="text" matInput placeholder="Title" formControlName="Title">
                    </mat-form-field>
                    <mat-form-field>
                        <input type="text" matInput placeholder="Subtitle" formControlName="Subtitle">
                    </mat-form-field>
                </p>
                <div id="editor" class="editor" ></div>

                <div class="displaynone" >
                   <mat-form-field>
                       <textarea matInput formControlName="ContentText"></textarea>
                   </mat-form-field>
                   <mat-form-field>
                       <textarea matInput formControlName="ContentHtml"></textarea>
                   </mat-form-field>
                </div>
            </form>
        </mat-card-content>
    </mat-card>
</div>`
  ,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // Program sequence run 3
  constructor(private formbilder: FormBuilder, private route: ActivatedRoute, private httpclient: HttpClient) { }

  // Program sequence run 4
  ngOnInit(): void {

    document.getElementById("editor").innerHTML = '';
    const editor = new Editor({
      target: document.getElementById('editor'),
      props: {
        height: '500px',
      }
    });
    $('.cl-button').attr('type', 'button');
    this.getupdateid()

    // Program sequence run 6
    this.form = new FormGroup({
      Sort: new FormControl(''),
      Title: new FormControl(''),
      Subtitle: new FormControl(''),
      ContentText: new FormControl(''),
      ContentHtml: new FormControl(''),
      ImgUrl: new FormControl('')
    });

  }

  // Program sequence run 1
  form: FormGroup;

  // Program sequence run 2
  title = 'Publish';
  id = 0;

  apiurl = '';

  // ngOnChanges() { }

  // Program sequence run 7
  ngDoCheck() {
    this.id = +this.route.snapshot.paramMap.get('id');
    // console.log('ngDoCheck=>id=' + this.id);
    if (this.id == 0) { this.title = 'Publish'; }
  }

  ngAfterContentInit() { }

  ngAfterContentChecked() { }

  ngAfterViewInit() { }

  ngAfterViewChecked() { }

  ngOnDestroy() { }

  // Program sequence run 5
  getupdateid(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log('id=' + this.id);
    if (this.id !== 0) {
      console.log('id!=0,id=' + this.id);
      this.title = 'Edit';
    }
  }

  submit() {
    if (this.form.valid) {
      this.form.value.ContentText = ((document.getElementsByClassName('cl-content')[0]) as HTMLElement).innerText;
      console.log('ContentText=' + this.form.value.ContentText)
      this.form.value.ContentHtml = document.getElementsByClassName('cl-content')[0].innerHTML;
      console.log('ContentHtml=' + this.form.value.ContentHtml)
      this.postRequest(this.form.value)
    }
  }

  postRequest(form) {
    this.apiurl = 'https://localhost:44367/api/News'
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    console.log(form);
    const body = JSON.stringify(form);
    //this.httpclient.post<any>(this.apiurl, body, options).subscribe();

  }

  putRequest(form) {

  }

}
