import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTaskComponent } from "./display-task/display-task.component";
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './homepage/nav-bar/nav-bar.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        SingleTaskComponent,
        
      
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomepageComponent,
        EditTaskComponent
    
    ]
})
export class AppModule { }
