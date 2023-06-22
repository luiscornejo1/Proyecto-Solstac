import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SolarComponent } from './pages/solar/solar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'energia-solar', component: SolarComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactenos', component: ContactComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
