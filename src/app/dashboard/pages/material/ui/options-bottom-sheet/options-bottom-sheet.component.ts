import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'options-bottom-sheet.component',
  standalone: true,
  imports: [ CommonModule, MatListModule ],
  templateUrl: './options-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsBottomSheetComponent {

  private _bottomSheetRef = inject<MatBottomSheetRef>(MatBottomSheetRef);

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
