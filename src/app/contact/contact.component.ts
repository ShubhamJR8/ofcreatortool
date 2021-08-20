import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { SelectplanService } from '../services/selectplan.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cntNoSales:string;
  cntNoTech:string;
  plans:string[] = ["Starter", "Basic", "Professional", "Ultra"];
  chosenPlan:string;
  contactForm: FormGroup;
  successMessage: string = "";
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private apiService:ApiService, private planService:SelectplanService) {
    this.cntNoSales = environment.contactNumberSales;
    this.cntNoTech = environment.contactNumberTechnical;
    this.planService.subjectSelectedPlan.subscribe(plan => {
      this.chosenPlan = plan;
      this.updateSelectedPlan();
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobno: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      plan: ['', Validators.required],
      subject: ['', Validators.required],
      comments: ['', [Validators.required, Validators.maxLength(1000)]],
      source: ['ecuisine.in']
    })
    if(this.chosenPlan !== ""){
      this.contactForm.controls.plan.setValue(this.chosenPlan);
    }
  }

  updateSelectedPlan() {
    if(this.chosenPlan !== ""){
      this.contactForm.controls.plan.setValue(this.chosenPlan);
    }
  }

  submit() {
    this.successMessage = "";
    this.apiService.sendFormData(this.contactForm.value)
      .then(res => res.json())
      .then(res => {
        if(res.status !== 500){
          this.successMessage = "Thanks for contacting us. We'll get back to you soon.";
          this.contactForm.reset();
          this.contactForm.controls.plan.setValue("");
          setTimeout(()=>{this.successMessage=""}, 5000);
        }
        else{
          this.errorMessage = "Some error occured!";
          this.contactForm.reset();
          this.contactForm.controls.plan.setValue("");
          setTimeout(()=>{this.errorMessage=""}, 5000);
        }
      })
      .catch(error => this.errorMessage = "Some error occured!")
  }
}
