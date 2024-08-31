import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AdminComponent } from './admin/admin.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { UpdateOrganizationComponent } from './update-organization/update-organization.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CaroselComponent } from './carosel/carosel.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'user-list',component:UserListComponent},
  {path:'user-details/:id',component:UserDetailsComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'create-category',component:CreateCategoryComponent},
  {path:'update-category/:id',component:UpdateCategoryComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'category-details/:id',component:CategoryDetailsComponent},
  {path:'category-delete',component:DeleteCategoryComponent},
  {path:'create-card',component:CreateCardComponent},
  {path:'update-card/:cardId',component:UpdateCardComponent},
  {path:'card-list',component:CardListComponent},
  {path:'card-details/:cardId',component:CardDetailsComponent},
  {path:'company-list',component:CompanyListComponent},
  {path:'create-company',component:CreateCompanyComponent},
  {path:'update-company/:cId',component:UpdateCompanyComponent},
  {path:'admin',component:AdminComponent},
  {path:'company-details/:cId',component:CompanyDetailsComponent},
  {path:'create-organization',component:CreateOrganizationComponent},
  {path:'update-organization/:id',component:UpdateOrganizationComponent},
  {path:'organization-list',component:OrganizationListComponent},
  {path:'organization-details/:id',component:OrganizationDetailsComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'carosel',component:CaroselComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'', redirectTo:'admin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
