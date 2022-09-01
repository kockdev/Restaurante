import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timeStamp } from 'console';
import { Lunch } from '../../lunch.model';

@Component({
  selector: 'app-lunch-review-dialog',
  templateUrl: './lunch-review-dialog.component.html',
  styleUrls: ['./lunch-review-dialog.component.css']
})
export class LunchReviewDialogComponent implements OnInit {
  @Input() packageSelected!: Lunch;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  bagValue: number;
  bagName!: any;
  bagValueBag!: any;
  bagLenght!: number;
  bagImage!: any;


  constructor() { }

  ngOnInit(): void {
    this.bagValue = JSON.parse(sessionStorage.getItem('value')!);
    this.bagName = JSON.parse(sessionStorage.getItem('name')!);
    this.bagValueBag = JSON.parse(sessionStorage.getItem('valueBag')!);
    this.bagImage = JSON.parse(sessionStorage.getItem('imageLink')!);
    this.bagLenght = JSON.parse(sessionStorage.getItem('lenght')!);
    
  }

  removeFoodBag(i: any){
    this.bagValue = this.bagValue - this.bagValueBag[i];
    this.bagImage.splice(i, 1);
    this.bagName.splice(i, 1);
    this.bagValueBag.splice(i, 1);
  }
}