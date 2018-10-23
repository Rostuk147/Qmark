import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
  ],
  declarations: []
})
export class SharedModule {
}
