import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  content: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.content = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
