import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // posts = [
  //     { title: 'First Post', content: 'This is the first post\'s content' },
  //     { title: 'Second post', content: 'This is the second post\'s content'},
  //     { title: 'Third Post', content: 'This is the third post\'s content' }
  //   ];

  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.postCreated.emit(post);

  }
  constructor() { }

  ngOnInit() {
  }
}
