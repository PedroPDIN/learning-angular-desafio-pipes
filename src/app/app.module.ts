import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIconPipe } from './pipes/status-icon.pipe';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIconPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, // configurando para alguns formatos sejam por padrão brasileiro "pt-BR" (como a data principalmente). Porém tem que registra a localidade brasileira.
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE, // por padrão os formatos da aplicação já estão em pt-BR "brasileiros" (datas, portos, virgular...), devido a configuração acima, porém o código monetário deve ser configurado para "BRL", padrão brasileiro
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
