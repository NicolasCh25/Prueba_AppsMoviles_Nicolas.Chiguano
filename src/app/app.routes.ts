import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:'login',
    loadComponent:() =>
      import('./pages/login/login.page')
      .then(m => m.LoginPage)
  },

  {
    path:'register',
    loadComponent:() =>
      import('./pages/register/register.page')
      .then(m => m.RegisterPage)
  },

  {
    path:'tabs',
    loadComponent:() =>
      import('./pages/tabs/tabs.page')
      .then(m => m.TabsPage),

    children:[

      {
        path:'home',
        loadComponent:() =>
          import('./pages/home/home.page')
          .then(m => m.HomePage)
      },

      {
        path:'camera',
        loadComponent:() =>
          import('./pages/camera/camera.page')
          .then(m => m.CameraPage)
      },

      {
        path:'profile',
        loadComponent:() =>
          import('./pages/profile/profile.page')
          .then(m => m.ProfilePage)
      },

      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }

    ]
  },

  {
    path:'detail/:id',
    loadComponent:() =>
      import('./pages/detail/detail.page')
      .then(m => m.DetailPage)
  }

];