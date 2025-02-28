import { Component } from '@angular/core';
import { GrokService } from '../services/grok.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  userMessage: string = '';
  chatHistory: { sender: string, message: string }[] = [];
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  constructor(private grokService: GrokService) {}

  sendMessage() {
    if (!this.userMessage.trim()) return; // No enviar mensajes vacíos

    this.chatHistory.push({ sender: 'Usuario', message: this.userMessage });

    // Llamamos al servicio para enviar el mensaje al backend Flask
    this.grokService.sendMessage(this.userMessage).subscribe((response: { response: string }) => {
      const botReply = response.response;
      this.chatHistory.push({ sender: 'Chatbot', message: botReply });
    }, (error: any) => {
      this.chatHistory.push({ sender: 'Chatbot', message: 'Hubo un error al procesar tu solicitud.' });
    });

    this.userMessage = ''; // Limpiar el input
  }

  // Método para manejar el envío del formulario
  submitForm(): void {
    // Aquí puedes manejar los datos del formulario como desees
    console.log('Formulario enviado');
    console.log('Nombre:', this.name);
    console.log('Correo Electrónico:', this.email);
    console.log('Número de Teléfono:', this.phone);
    console.log('Mensaje:', this.message);

    // Si quieres, puedes limpiar los campos después de enviarlo
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
