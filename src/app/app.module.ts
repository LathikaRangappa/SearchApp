import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { ImageListComponent } from './image-list/image-list.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import { FavListsCompComponent } from './fav-lists-comp/fav-lists-comp.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserEffects } from './user.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './user.reducer'


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    DialogPopupComponent,
    FavListsCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({cart:reducer}),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  entryComponents:[DialogPopupComponent,FavListsCompComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
