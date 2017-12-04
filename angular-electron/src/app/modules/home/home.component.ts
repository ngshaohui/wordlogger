import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleDrop(e) {
    var files:File = e.dataTransfer.files;
    Object.keys(files).forEach((key) => {
      console.log(files[key]);
    });

    return false;
  }

}
