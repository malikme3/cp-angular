

import { NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../../environments/environment';

export const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const authOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: environment.apiUrl,
      token: {
        key: 'token',
      },
      login: {
        endpoint: '/auth/login',
        method: 'post',
      },
      register: {
        endpoint: '/auth/sign-up',
        method: 'post',
      },
      logout: {
        endpoint: '/auth/sign-out',
        method: 'post',
      },
      requestPass: {
        endpoint: '/auth/request-pass',
        method: 'post',
      },
      resetPass: {
        endpoint: '/auth/reset-pass',
        method: 'post',
      },
    }),
  ],
  forms: {
    login: {
      socialLinks: socialLinks,
    },
    register: {
      socialLinks: socialLinks,
    },
  },
};
