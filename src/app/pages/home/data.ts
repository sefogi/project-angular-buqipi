// types
import { Demo, Feature } from "./home.model"

const LANDINGDEMOS: Demo[] = [
    {
        image: 'assets/images/demo/landing/home-app.jpg',
        url: '/landing/app',
        name: 'Mobile App',
    },
    {
        image: 'assets/images/demo/landing/home-saas.jpg',
        url: '/landing/saas/1',
        name: 'Saas Modern',
    },
    {
        image: 'assets/images/demo/landing/home-saas2.jpg',
        url: '/landing/saas/2',
        name: 'Saas Classic',
    },
    {
        image: 'assets/images/demo/landing/home-startup.jpg',
        url: '/landing/startup',
        name: 'Startup',
    },
    {
        image: 'assets/images/demo/landing/home-software.jpg',
        url: '/landing/software',
        name: 'Software',
    },
    {
        image: 'assets/images/demo/landing/home-agency.jpg',
        url: '/landing/agency',
        name: 'Agency',
    },
    {
        image: 'assets/images/demo/landing/home-coworking.jpg',
        url: '/landing/coworking',
        name: 'Co-Working',
    },
    {
        image: 'assets/images/demo/landing/home-crypto.jpg',
        url: '/landing/crypto',
        name: 'Crypto',
    },
    {
        image: 'assets/images/demo/landing/home-marketing.jpg',
        url: '/landing/marketing',
        name: 'Marketing',
    },
    {
        image: 'assets/images/demo/landing/home-portfolio.jpg',
        url: '/landing/portfolio',
        name: 'Portfolio',
    },
];

// const PAGESDEMOS: Demo[] = [
//     {
//         image: 'assets/images/demo/pages/company.jpg',
//         url: '/pages/company',
//         name: 'Company',
//     },
//     {
//         image: 'assets/images/demo/pages/contact.jpg',
//         url: '/pages/contact',
//         name: 'Contact',
//     },
//     {
//         image: 'assets/images/demo/pages/career.jpg',
//         url: '/pages/career',
//         name: 'Career',
//     },
//     {
//         image: 'assets/images/demo/pages/blog.jpg',
//         url: '/pages/blog',
//         name: 'Blog',
//     },
//     {
//         image: 'assets/images/demo/pages/blog-post.jpg',
//         url: '/pages/blog/post',
//         name: 'Blog-Post',
//     },
//     {
//         image: 'assets/images/demo/pages/dashboard.jpg',
//         url: '/pages/account/dashboard',
//         name: 'Dashboard',
//     },
//     {
//         image: 'assets/images/demo/pages/settings.jpg',
//         url: '/pages/account/settings',
//         name: 'Settings',
//     },
//     {
//         image: 'assets/images/demo/pages/portfolio-grid.jpg',
//         url: '/pages/portfolio/grid',
//         name: 'Portfolio Grid',
//     },
//     {
//         image: 'assets/images/demo/pages/portfolio-masonry.jpg',
//         url: '/pages/portfolio/masonry',
//         name: 'Portfolio Masonry',
//     },
//     {
//         image: 'assets/images/demo/pages/portfolio-item.jpg',
//         url: '/pages/portfolio/item',
//         name: 'Portfolio-item',
//     },
//     {
//         image: 'assets/images/demo/pages/pricing.jpg',
//         url: '/pages/pricing',
//         name: 'Pricing',
//     },
//     {
//         image: 'assets/images/demo/pages/help.jpg',
//         url: '/pages/help',
//         name: 'Help',
//     },
// ];

const AUTHDEMOS: Demo[] = [
    {
        name: 'Login',
        image: 'assets/images/demo/pages/auth-login.jpg',
        url: '/auth/login'
    },
    {
        name: 'Sign Up',
        image: 'assets/images/demo/pages/auth-signup.jpg',
        url: '/auth/signup'
    },
    {
        name: 'Forget Password',
        image: 'assets/images/demo/pages/auth-password.jpg',
        url: '/auth/forgot-password'
    },
    {
        name: 'Confirm Account',
        image: 'assets/images/demo/pages/auth-confirm.jpg',
        url: '/auth/confirm-account'
    }
];

export const features: Feature[] = [
    {
        icon: '',
        name: '',
        shapes: ['shape1', 'shape2'],
        title: 'Vista general',
        description: 'La plataforma perfecta para transformar y simplificar la gestión de tu negocio.',
        image: 'assets/images/features/app3.png',
    },
    {
        icon: 'layout',
        name: 'Cross-browser compatible',
        shapes: ['shape3', 'shape4'],
        title: "Create Task Easily",
        description: 'Speedy App provides instant information on thousands of hire and buy products.',
        image: 'assets/images/features/app4.png'
    },
    {
        icon: '',
        name: '',
        shapes: ['shape5', 'shape6'],
        title: 'Quick Access to Team',
        description: "'Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.',",
        image: 'assets/images/features/app4.png',
    }
    
    
];

export { LANDINGDEMOS, AUTHDEMOS, Feature }