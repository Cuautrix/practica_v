import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { MenuComponent } from "../menu/menu.component";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
    imports: [BannerComponent, MenuComponent, BodyComponent]
})
export class InicioComponent {

}
