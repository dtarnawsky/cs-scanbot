import { Component } from '@angular/core';

import ScanbotSdk, {
  CameraImageFormat,
  DocumentScannerConfiguration,
  FileEncryptionMode,
  ScanbotSDKConfiguration
} from 'cordova-plugin-scanbot-sdk';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public SDK = (ScanbotSdk as any).promisify();
  constructor() {
    this.initScanbotSdk();
   }

  private async initScanbotSdk(): Promise<any> {
    const config: ScanbotSDKConfiguration = {
      loggingEnabled: true,
      licenseKey: 'undefined',
      documentDetectorMode: 'ML_BASED',
      useCameraX: true,
      allowXnnpackAcceleration: false,
      allowGpuAcceleration: false,
    };


    return await this.SDK.initializeSdk(config);
  }
}
