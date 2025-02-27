import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArticles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(response => {
      this.newsArticles = response.articles;
    });
  }

}
