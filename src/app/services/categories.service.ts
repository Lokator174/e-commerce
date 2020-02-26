import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories = [
  { id: 1, img: 'https://items.s1.citilink.ru/458728_v01_b.jpg', name: 'Category 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
  { id: 2, img: 'https://items.s1.citilink.ru/458728_v01_b.jpg', name: 'Category 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
  { id: 3, img: 'https://items.s1.citilink.ru/458728_v01_b.jpg', name: 'Category 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
];
}
