import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';
import { ProductInterface } from 'src/app/core/interfaces';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  @Output() newUser = new EventEmitter<UserInterface>();
  @Output() newProduct = new EventEmitter<ProductInterface>();


  newUserForm: FormGroup;
  newProductForm: Array<ProductInterface>;
  isSubmit = false;
  product = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createNewUserForm();
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.newUserForm.invalid){
      return;
    }

    this.newUser.emit(this.newUserForm.value)
    // this.product.emit(this.newProductForm.values)

    // this.submit(this.newUserForm.value);
    this.isSubmit = false;
    this.newUserForm.reset();
    localStorage.clear();
    this.product = [];
    alert("Замовлення сформовано. Очікуйте смс з номером замовлення");
  }

  // clearBasket(): void {
  //   localStorage.clear();
  //   this.product = [];
  // }

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
    }),

    this.product = [{
        id: '',
        title: '',
        price: ''
      }
    ]
  }

}
