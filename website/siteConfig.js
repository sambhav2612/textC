/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Sambhav Jain',
    image: '/img/dp.jpg',
    infoLink: 'https://github.com/sambhav2612',
    pinned: true,
  },
  {
    caption: 'Anmol Wasaan',
    image: '/img/dp.jpg',
    infoLink: 'https://github.com/coderwassananmol',
    pinned: true,
  },
  {
    caption: 'Lewis (torvim)',
    image: '/img/dp.jpg',
    infoLink: 'https://github.com/torvim',
    pinned: true,
  },
];

const siteConfig = {
  title: 'CEdit' /* title for your website */,
  tagline: 'Think C and C++ do not get along? Think again.',
  url: 'https://sambhav2612.github.io' /* your website url */,
  baseUrl: '/CEdit/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'sambhav2612.github.io',
  organizationName: 'sambhav2612',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc2', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/dp.jpg',
  footerIcon: 'img/dp.jpg',
  favicon: 'img/dp.jpg',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  fonts: {
    myFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Sambhav Jain',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/dp.jpg',
  twitterImage: 'img/dp.jpg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
