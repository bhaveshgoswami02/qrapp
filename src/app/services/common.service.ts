import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) { }

  async startLoader():Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }

  async stopLoader() {
    return await this.loadingController.dismiss();
  }

  async toast(msg: string):Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

}
