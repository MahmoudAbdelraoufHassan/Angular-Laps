import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
NgModel
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
handleSubmit(details : any) {
  if (details.value.email != "")
  alert(`Your email is ${details.value.email}`);
}

}
