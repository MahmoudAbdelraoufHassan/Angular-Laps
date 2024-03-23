import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rigister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rigister.component.html',
  styleUrl: './rigister.component.css'
})
export class RigisterComponent {
  registerForm : FormGroup;
  pass : string = "P@ssword1234";
  noWhite = /^\s+$/ ;
  pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
constructor (){
  this.registerForm = new FormGroup ({
    Name : new FormControl('' , Validators.required) ,
    email : new FormControl('' , [Validators.required , Validators.pattern(this.pattern)]),
    userName : new FormControl('' ,Validators.required),
    password : new FormControl('' , [Validators.required ,Validators.minLength(8) , Validators.pattern(this.passPattern)] ),
  })
}
submitForm() {
  console.log(this.registerForm);
}
}
