import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number; name: string; } | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id : this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    this.route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.user.id = params.id;
        // @ts-ignore
        this.user.name = params.name;
      }
    );
  }
}
