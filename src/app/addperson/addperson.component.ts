import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { oneRecord } from '../onerecord';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css'],
  providers:[StorageService]
})

export class AddpersonComponent implements OnInit{

    /**
   * Group of 2 forms:
   * inputName gets "Name", uses validation
   * (if "Name" is empty, "Save" button is inactive).
   * 
   * inputDescription gets "Description", without validation.
   */
  addPersonForm = new FormGroup({
    inputName: new FormControl('',[Validators.required]),
    inputDescription: new FormControl(''),
  });

  record: oneRecord = {name: '', description: ''}  //initialized empty record

  constructor (private router:Router, private storageService: StorageService) { }

  ngOnInit() { }


  /**
 * Method onSave();
 * Takes values "inputName" and "inputDescription",
 * writes them in a variable 'record' and adds 
 * using storageService.addRecord();
 * Then, redirects to /home
 */
  onSave() {
    this.record.name = this.addPersonForm.value.inputName;
    this.record.description = this.addPersonForm.value.inputDescription;
    this.storageService.addRecord(this.record);
    this.router.navigate(['../home']);
  }

  /**
 * Method onCancel();
 * Redirects to /home
 * Values in form fields are discarded
 */
  onCancel() {
    this.router.navigate(['../home']);
  }
  
}
