import { AppService } from 'src/app/services/app.service';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAction } from 'src/app/models/action';
import { IStage } from 'src/app/models/stage';
import { EditActionModalComponent } from '../edit-action-modal/edit-action-modal.component';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent {
  @Input() stage: IStage;

  constructor() {
    this.stage = {
      name: 'no action',
      actions: [],
    };
  }
}
