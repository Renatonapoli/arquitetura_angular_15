import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  users$!: Observable<any[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.users$ = this.userService.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
