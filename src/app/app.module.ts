import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { ResumeComponent } from './resume/resume.component';
import { AndroidComponent } from './android/android.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { MiniGameComponent } from './mini-game/mini-game.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,
    AndroidComponent,
    ProjectCardComponent,
    ProjectDialogComponent,
    MiniGameComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
