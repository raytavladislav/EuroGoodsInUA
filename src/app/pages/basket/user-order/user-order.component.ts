import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  @Output() newUser = new EventEmitter<UserInterface>();

  newUserForm: FormGroup;
  isSubmit = false;
  product = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createNewUserForm();
  }

  
  onSubmit(): void {
    console.log(this.newUserForm.value)
    this.isSubmit = true;

    if (this.newUserForm.invalid){
      return;
    }

    this.newUser.emit(this.newUserForm.value)

    // this.submit(this.newUserForm.value);
    this.isSubmit = false;

    this.newUserForm.reset();
    // localStorage.clear()
    // this.product = []
    
    // ??? this.isSubmit.false
  }

  private createNewUserForm(): void {
    this.newUserForm = this.fb.group({
      id: '',
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      secondName: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      postNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      addItionalInfo: ['']
    });
  }
    

}
