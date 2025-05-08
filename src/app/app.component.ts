import { Component } from '@angular/core';
import { ExchangeServiceService } from './services/exchange-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  currencyCode: string = '';
  exchangeRate: number | null = null;
  timestamp: string | null = null;
  errorMessage: string = '';

  constructor(private exchangeService: ExchangeServiceService) {}

  onCurrencyCodeChange() {
    if (this.currencyCode.trim() === '') {
      this.exchangeRate = null;
      this.errorMessage = ''
    }
  }

  getExchangeRate() {
    const code = this.currencyCode.trim().toUpperCase();

    if (!code) {
      this.errorMessage = 'Please enter a currency code.';
      this.exchangeRate = null;
      return;
    }

    this.exchangeService.getExchangeRate(code).subscribe({
      next: (rate) => {
        this.exchangeRate = rate;
        this.timestamp = this.formatDate(new Date());
        this.errorMessage = '';
      },
      error: (err) => {
        this.exchangeRate = null;
        this.errorMessage = err.message;
      }
    });
  }

  private formatDate(date: Date): string {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    const hora = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const seg = String(date.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
  }
}