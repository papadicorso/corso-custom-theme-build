import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MatioModule {}
