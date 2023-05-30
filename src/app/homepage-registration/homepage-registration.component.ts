import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-homepage-registration',
  templateUrl: './homepage-registration.component.html',
  styleUrls: ['./homepage-registration.component.scss']
})
export class HomepageRegistrationComponent {

   @Input()
   data =  {name: "", surname: "", email: "", dob: "", topics: [""], privacy: false}

  formGroup = new FormGroup({
    name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3)]),
    surname: new FormControl(this.data.surname, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    dob: new FormControl(this.data.dob, Validators.required),
    topics: new FormControl([this.data.topics], Validators.required),
    privacy: new FormControl(this.data.privacy, Validators.requiredTrue),
  });

  get name(){
    return this.formGroup.get("name") as FormControl
  }
  get surname(){
    return this.formGroup.get("surname") as FormControl
  }
  get email(){
    return this.formGroup.get("email") as FormControl
  }
  get dob(){
    return this.formGroup.get("dob") as FormControl
  }
  get topics(){
    return this.formGroup.get("topics") as FormControl
  }
  get privacy(){
    return this.formGroup.get("privacy") as FormControl
  }
  submitForm(){
    console.log(this.formGroup.value);
    alert("A mail has been sent to " + this.formGroup.value.email + ".\nMake sure to check your inbox")
  }
}
