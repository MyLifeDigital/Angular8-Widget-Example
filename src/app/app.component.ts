import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  Renderer2,
} from "@angular/core";

declare let StatefulWidget: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private renderer: Renderer2
  ) { }

  title = 'widget8';

  ngOnInit() {
    // const s1 = this.renderer.createElement("script");
    // s1.innerHTML = `
    // var widget = StatefulWidget.load({
    //   id: 'widget-container',
    //   token: '87b45c32ebc6110eb7eca2555b385c2c',            
    //   templateId: 'N1kPKeKr7ek',
    //   display: {
    //       location: 'inside',
    //       consentricLogo: false,
    //       closeOnSubmit: false,
    //       displayButtons: true,
    //       displayCancelButtons: false,
    //       displayAllNoneOptions: true,
    //       applyDefaultStyle: true,
    //   },
    //   events: {
    //       onSuccess: () => {
    //           console.log('success');
    //       },
    //       onUpdate: (state) => {
    //           console.log(state);
    //       },
    //       onLoadError: (error) => {
    //           console.log('Error');
    //           console.log(error);
    //       }
    //   }
    // });
    // `
    // this.renderer.appendChild(this._document.body, s1);

    var widget = StatefulWidget.load({
      id: 'widget-container',
      token: '68f11ef72c3256030c86f3cca531978d',            
      templateId: 'N1kPKeKr7ek',
      display: {
          location: 'inside',
          consentricLogo: false,
          closeOnSubmit: false,
          displayButtons: true,
          displayCancelButtons: false,
          displayAllNoneOptions: true,
          applyDefaultStyle: true,
      },
      events: {
          onSuccess: () => {
              console.log('success');
          },
          onUpdate: (state) => {
              console.log(state);
          },
          onLoadError: (error) => {
              console.log('Error');
              console.log(error);
          }
      }
    });
    


    // const s2 = this.renderer.createElement("script");
    // s2.src = 'https://widget.sandbox.consentric.io/public/init.js';
    // s2.id = "init";
    // this.renderer.appendChild(this._document.body, s2);
  }
}
