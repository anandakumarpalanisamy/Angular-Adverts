import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AdvertModel, ImageModel } from '../../../core/models/advert.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-advert-edit-form',
  templateUrl: './advert-edit-form.component.html',
  styleUrls: ['./advert-edit-form.component.sass']
})
export class AdvertEditFormComponent implements OnChanges {

  @Output()
  beforeSendData = new EventEmitter();
  @Input() advertData: AdvertModel;

  advertForm = new FormGroup({
    theme: new FormControl(),
    text: new FormControl(),
    price: new FormControl(),
    is_active: new FormControl(),
    contract_price: new FormControl()
  })
  imagesArray: ImageModel[];
  constructor(private fb: FormBuilder) {
  }

  createForm() {
    if(this.advertData) {
      this.advertForm = this.fb.group({
        theme: [this.advertData.theme || '', [Validators.required]],
        text: [ this.advertData.text || '', [Validators.required, Validators.minLength(6)]],
        price: [this.advertData.price || 0, [Validators.required, Validators.minLength(12)]],
        is_active: [this.advertData.is_active || true],
        contract_price: [this.advertData.contract_price || false]
      });
    } else {
      this.advertForm = this.fb.group({
        theme: [ '', [Validators.required]],
        text: [ '', [Validators.required, Validators.minLength(6)]],
        price: [ 0, [Validators.required, Validators.minLength(12)]],
        is_active: [true],
        contract_price: [false]
      });
      
    }
  }

  onSubmitForm(){ 
    const advertVal = this.advertForm.value;
    if(this.advertForm.valid) {
      const advertObj = {
        theme: advertVal.theme,
        text: advertVal.text,
        price: advertVal.price,
        is_active: advertVal.is_active,
        contract_price: advertVal.contract_price
      }
      this.beforeSendData.emit({advert: advertObj,images:this.imagesArray});
    } else {
      return false
    }
  }

  setFileList(event) {
    this.imagesArray = event;
  }

  ngOnChanges() {
    if(this.advertData) { 
      console.log(this.advertData);
      this.createForm();
    }
  }

}
