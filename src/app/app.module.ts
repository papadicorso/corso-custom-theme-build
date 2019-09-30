import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MatioModule } from "./matio/matio.module";
import { CardOneComponent } from "./components/card-one/card-one.component";
import { CardTwoComponent } from "./components/card-two/card-two.component";
import { CardThreeComponent } from "./components/card-three/card-three.component";

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
