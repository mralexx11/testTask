import {Component, OnInit} from "@angular/core";
import {CardComponent} from "../card/card.component";
import {MOCKED_IMAGES} from "../mock/mock-data.const";
import {pascalCaseTransformer} from "../helper/pascalCaseTransformer";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'ag-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  imports: [
    CardComponent,
    NgForOf,
    FormsModule
  ],
  standalone: true
})

export class CardsComponent implements OnInit{
  public cards: Record<string, any>[] | undefined;
  public data: Record<string, any>[] | undefined;
  public filterQuery = '';
  public ngOnInit(): void {
    // Here should be a service with a BE call
    this.data = pascalCaseTransformer(MOCKED_IMAGES);
    this.cards = this.data;
  }

  public filterCards(searchText: string) {
    this.cards = this.data?.filter(card =>
      card['itemTitle'].toLowerCase().includes(searchText.toLowerCase())
    );
  }
 public clearFilter(): void {
    this.filterQuery = '';
    this.filterCards(this.filterQuery);
 }
}
