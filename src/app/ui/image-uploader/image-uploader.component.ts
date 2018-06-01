import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.sass']
})
export class ImageUploaderComponent implements OnInit {

  filesList: object[] = [];
  
  @Output()
  filesChanged = new EventEmitter();

  constructor() { }

  callAddingFile() {
    const el: HTMLElement = document.querySelector('#file-container');
    el.click();
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
    const f = this.filesList.find(
      (el: File) =>  el.name === file.name
    )
    this.filesList.splice(this.filesList.indexOf(f), 1);
    this.filesChanged.emit(this.filesList);
  }

  ngOnInit() {
  }

}
