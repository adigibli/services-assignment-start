import { Injectable, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService implements OnInit{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  InactivateUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  ActivateUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  constructor(private counterService: CounterService) { }
  
  ngOnInit(): void {
    this.counterService.counter = this.activeUsers.length;
  }
}
