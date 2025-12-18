module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'https://cdn.ckeditor.com'],
          'connect-src': ["'self'", 'https://proxy-event.ckeditor.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://cdn.ckeditor.com'],
          'upgradeInsecureRequests': null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
