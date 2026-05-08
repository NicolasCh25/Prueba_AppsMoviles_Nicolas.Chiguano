import { Injectable } from '@angular/core';

import {
  Camera,
  CameraResultType,
  CameraSource
} from '@capacitor/camera';

import {
  Filesystem,
  Directory
} from '@capacitor/filesystem';

import {
  Preferences
} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  public photos: any[] = [];

  private PHOTO_STORAGE = 'photos';

  constructor() {}

  async addNewPhoto() {

    const capturedPhoto = await Camera.getPhoto({

      resultType: CameraResultType.DataUrl,

      source: CameraSource.Camera,

      quality: 90,

      saveToGallery: true

    });

    const fileName = new Date().getTime() + '.jpeg';

    await Filesystem.writeFile({

      path: fileName,

      data: capturedPhoto.dataUrl!,

      directory: Directory.Data

    });

    const newPhoto = {

      filepath: fileName,

      webviewPath: capturedPhoto.dataUrl

    };

    this.photos.unshift(newPhoto);

    await Preferences.set({

      key: this.PHOTO_STORAGE,

      value: JSON.stringify(this.photos)

    });

  }

  async loadPhotos() {

    const { value } = await Preferences.get({

      key: this.PHOTO_STORAGE

    });

    this.photos = value
      ? JSON.parse(value)
      : [];

  }

}