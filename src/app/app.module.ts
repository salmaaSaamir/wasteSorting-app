import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup  } from '@angular/forms';

import { AssignMatrialesComponent } from './assign-matriales/assign-matriales.component';
import { ListMatrialesComponent } from './list-matriales/list-matriales.component';
import { AddMatrialesComponent } from './add-matriales/add-matriales.component';
import { EditeMachineComponent } from './edite-machine/edite-machine.component';
import { UsersComponent } from './users/users.component';
import { NaveComponent } from './nave/nave.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMachinComponent } from './admin-machin/admin-machin.component';
import { AddMachinComponent } from './add-machin/add-machin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

export const firebaseConfig={
  apiKey: "AIzaSyDrTgpRXQfPjpyfJBEpWtWMHymYr1NmntQ",
  authDomain: "waste-sorting-50fbf.firebaseapp.com",
  databaseURL: "https://waste-sorting-50fbf-default-rtdb.firebaseio.com",
  projectId: "waste-sorting-50fbf",
  storageBucket: "waste-sorting-50fbf.appspot.com",
  messagingSenderId: "142951224896",
  appId: "1:142951224896:web:ad5109610ae27f6930f1a5",
  measurementId: "G-15TWGZ5LRP"
}

@NgModule({
  declarations: [
    AppComponent,
    AssignMatrialesComponent,
    ListMatrialesComponent,
    AddMatrialesComponent,
    EditeMachineComponent,
    UsersComponent,
    NaveComponent,
    AdminComponent,
    AdminMachinComponent,
    AddMachinComponent,
    AdminNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule , CommonModule,FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule,AngularFireAuthModule,AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
