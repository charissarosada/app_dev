import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BorrowermanangementComponent } from './borrowermanangement/borrowermanangement.component';
import { LibrarianmanagementComponent } from './librarianmanagement/librarianmanagement.component';
import { BookmanagementComponent } from './bookmanagement/bookmanagement.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
{
  path: 'about',
  component: AboutusComponent,
  title: 'About Us',
},

{
    path: 'borrowers',
    component: BorrowermanangementComponent,
    title: 'Borrowers',
  },
  {
    path: 'librarians',
    component: LibrarianmanagementComponent,
    title: 'Librarians',
  },

  {
    path: 'books',
    component: BookmanagementComponent,
    title: 'Books',
  },
];
