import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: "app-home-contactform",
    templateUrl: "./contactform.component.html",
    styleUrls: ["./contactform.component.scss"]
})
export class ContactFormComponent implements OnInit {
    contactForm!: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      });
    }
  
    onSubmit(): void {
      if (this.contactForm.valid) {
        const formData = this.contactForm.value;
        console.log('Formulario enviado:', formData);
        // conexion al backend usando un servicio
      }
    }
  }