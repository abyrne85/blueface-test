import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { TextInputComponent } from "./text-input/text-input.component";

@NgModule({
  declarations: [ButtonComponent, TextInputComponent],
  exports: [ButtonComponent, TextInputComponent],
  imports: [CommonModule, FormsModule],
})
export class UiElementsModule {}
