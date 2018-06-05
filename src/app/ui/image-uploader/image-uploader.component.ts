import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { ImageModel } from '../../core/models/advert.model';
import { AdvertsService } from '../../adverts/shared/adverts.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.sass']
})
export class ImageUploaderComponent implements OnChanges {

  filesList: object[] = [];
  
  @Output()
  filesChanged = new EventEmitter();
  @Input() baseList: ImageModel[];

  constructor(private advertService: AdvertsService) { }

  callAddingFile() {
    let totalImates;
    this.baseList ? totalImates =  this.filesList.length + this.baseList.length :  totalImates =  this.filesList.length
    if(totalImates < 5 ) {
      const el: HTMLElement = document.querySelector('#file-container');
      el.click();
    }else {
      return false
    }  
  }

  addNewImage(event) {
    const myReader: FileReader = new FileReader();
    const files: File[] = event.target.files;
    for(let file of files) {
      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
        const obj = {
          name: file.name,
          base64: myReader.result
        }
        this.filesList.push(obj);
        this.filesChanged.emit(this.filesList);
      };
    }
  }

  removeFile(file) {
    if(file.pk) {
      this.advertService.deleteImage(file.advert ,file.pk).subscribe(
        (data) => {
          const f = this.baseList.find(
            (el: ImageModel) =>  el.pk === file.pk
          )
          this.baseList.splice(this.baseList.indexOf(f), 1);
        }
      );
    } else {
      const f = this.filesList.find(
        (el: File) =>  el.name === file.name
      )
      this.filesList.splice(this.filesList.indexOf(f), 1);
      this.filesChanged.emit(this.filesList);
    }
  }

  ngOnChanges() {
    if(this.baseList) {
      // console.log(this.baseList);
    }
  }

}
