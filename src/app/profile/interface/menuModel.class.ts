export interface menuModel{
    titulo:     string;
    icon:       string;
    url:        string;
    css:        string; 
}


export const menuDefault: menuModel = 
    {
        titulo: 'dashboard',
        icon: './assets/img/dashboard.png',
        url: '/profile/dashboard',
        css: 'item'
    }
    
   export const menulateral: menuModel[]=[
        {
          titulo: 'MarketPlace',
          icon: '',
          url: '',
          css: 'item-title'
        },
        {
            titulo: 'dashboard',
            icon: './assets/img/dashboard.png',
            url: '/profile/dashboard',
            css: 'item',
            
          },
          {
            titulo: 'products',
            icon: './assets/img/products.png',
            url: './products',
            css: 'item'
          },
          {
            titulo: 'sales',
            icon: './assets/img/sales.png',
            url: './sales',
            css: 'item',
          },
          {
            titulo: 'settings',
            icon: '',
            url:'',
            css: 'item-title'
          },
          {
      
            titulo: 'users',
            icon: './assets/img/users.png',
            url: './users',
            css: 'item'
          },
      
          {
      
            titulo: 'setup',
            icon: './assets/img/setup.png',
            url: './setup',
            css: 'item'
          },
      

    ]
export const menuExit: menuModel =

{

    titulo: 'logOut',
    icon: './assets/img/cerrado.png',
    url: './logout',
    css: 'item'
  }

