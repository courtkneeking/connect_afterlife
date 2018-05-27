import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PamphletComponent } from './pamphlet/pamphlet.component';
import { MemoriesComponent } from './memories/memories.component';
import { DiscussionComponent } from './discussion/discussion.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'pages/new', component: NewComponent},
  {path: 'phonebook', component: PhonebookComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'invitations', component: InvitationsComponent},
  {path: 'page', component: PageComponent},
  {path: 'obituary', component: ObituaryComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'pages/contacts', component: ContactsComponent},
  {path: 'pages/pamphlet', component: PamphletComponent},
  {path: 'pages/memories', component: MemoriesComponent},
  {path: 'pages/discussion', component: DiscussionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
