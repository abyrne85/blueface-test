import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FeedbackMessageComponent } from './feedback-message/feedback-message.component';

@NgModule({
  declarations: [ButtonComponent, TextInputComponent, FeedbackMessageComponent],
  exports: [ButtonComponent, TextInputComponent, FeedbackMessageComponent],
  imports: [CommonModule, FormsModule],
})
export class UiElementsModule {}
