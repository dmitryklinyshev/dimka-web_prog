import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HI-TECH Admin panel';

  constructor(private http: HttpClient,
    private ngxService: NgxUiLoaderService) { }

    ngOnInit() {
      this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
      // Stop the foreground loading after 5s
      setTimeout(() => {
        this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
      }, 400);
    }


}
