import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task Manager';
  values: any;

  constructor( private http: HttpClient) {}
 
  
  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.values, event.previousIndex, event.currentIndex);
    }
  
}
