import {Component, Input} from "@angular/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'ag-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [
    DatePipe
  ],
  standalone: true
})
export class CardComponent {
@Input({required: true}) url!: string;
@Input({required: true}) title!: string;
@Input({required: true}) subtitle!: string;
}
