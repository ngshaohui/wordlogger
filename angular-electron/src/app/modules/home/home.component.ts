import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  test() {
    this.storageService.test();
  }

}
