import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Input() userId: string | null = null;
  useForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.useForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([this.createPhone()]),
    });
  }

  get phones() {
    return this.useForm.get('phones') as FormArray;
  }

  createPhone(): FormGroup {
    return this.fb.group({
      number: ['', Validators.required],
    });
  }

  addPhone(index: number): void {
    this.phones.removeAt(index);
  }

  onsubmit(): void {
    if (this.useForm.valid) {
      const user = this.useForm.value;
      if (this.userId) {
        this.userService.updateUser(this.userId, user).subscribe({
          next: () => {
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error(err);
          },
        });
      } else {
        this.userService.addUser(user).subscribe({
          next: () => {
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
    }
  }
}
