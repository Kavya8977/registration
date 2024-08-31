import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { UpdateOrganizationComponent } from './update-organization/update-organization.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CaroselComponent } from './carosel/carosel.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    NavbarComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
    CardListComponent,
    CardDetailsComponent,
    CreateCardComponent,
    UpdateCardComponent,
    CompanyListComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    CompanyDetailsComponent,
    HeaderComponent,
    AdminComponent,
    CreateOrganizationComponent,
    UpdateOrganizationComponent,
    OrganizationDetailsComponent,
    OrganizationListComponent,
    ChangePasswordComponent,
    CaroselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
