import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }

  upload_Image(file:any){
    const CLOUDINARY_NAME = "ductham087";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "upload_images";
    // const CLOUDINARY_PRESET = "uploadImages";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    const res = this.httpClient.post(CLOUDINARY_API, formData, {
        headers: {
          "Content-Type": "application/form-data"
      }
    });
    return res;
  }


}
