import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  Renderer2,
} from "@angular/core";

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
    const s1 = this.renderer.createElement("script");
    s1.innerHTML = `
      var widget_config = {
        templateId: '< Template Id >',
        token: '< Token >'
      }
    `
    this.renderer.appendChild(this._document.body, s1);

    const s2 = this.renderer.createElement("script");
    s2.src = 'https://widget.sandbox.consentric.io/public/init.js';
    s2.id = "init";
    this.renderer.appendChild(this._document.body, s2);
  }
}
