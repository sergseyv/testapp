import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { oneRecord } from '../onerecord';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[StorageService]
})

export class HomeComponent implements OnInit {

  records: oneRecord[];

  constructor(private router:Router, private storageService: StorageService) { }

  /**
   * Method ngOnInit();
   * Starting initialization.
   * Data is read into a variable to display 
   * when the page is created.
   */
  ngOnInit() {
    this.records = this.storageService.getRecords();
  }

  /**
   * Method onAddPerson();
   * Redirects to /new
   * to add a new person.
   */
  onAddPerson() {
    this.router.navigate(['../new']);
  }

}
