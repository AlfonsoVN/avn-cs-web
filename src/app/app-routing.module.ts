import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto (Home)
  { path: 'chatbot', component: ChatbotComponent }, // Ruta para chatbot
  { path: 'news', component: NewsComponent } // Ruta para noticias
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
