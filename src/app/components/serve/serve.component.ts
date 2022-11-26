import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
  id: number = 10;
  status: string = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

}
