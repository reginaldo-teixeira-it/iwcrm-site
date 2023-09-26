import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const approutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./features/navigation/navigation.module').then(m => m.NavigationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'person-list',
    loadChildren: () => import('./features/person/person.module').then(m => m.PersonModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tools-list',
    loadChildren: () => import('./features/tools/tools.module').then(m => m.ToolsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'icons',
    loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'typography',
    loadChildren: () => import('./features/typography/typography.module').then(m => m.TypographyModule),
    canActivate: [AuthGuard]
  },

  // {
  //   path: 'users',
  //   loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'icons',
  //   loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'typography',
  //   loadChildren: () => import('./features/typography/typography.module').then(m => m.TypographyModule),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
