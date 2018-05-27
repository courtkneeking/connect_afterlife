import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { NewComponent } from './new/new.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { MessagesComponent } from './messages/messages.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { PageComponent } from './page/page.component';
import { ObituaryComponent } from './obituary/obituary.component';
import { DealsComponent } from './deals/deals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MemoriesComponent } from './memories/memories.component';
import { PamphletComponent } from './pamphlet/pamphlet.component';
import { DiscussionComponent } from './discussion/discussion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FaqComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    PagesComponent,
    NewComponent,
    PhonebookComponent,
    MessagesComponent,
    InvitationsComponent,
    PageComponent,
    ObituaryComponent,
    DealsComponent,
    ContactsComponent,
    MemoriesComponent,
    PamphletComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
