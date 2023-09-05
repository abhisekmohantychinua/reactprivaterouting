export const routing = [
    { id: 1, path: '/', name: 'Home', isPrivate: false, role: 'any' },
    { id: 2, path: '/login', name: 'Login', isPrivate: false, role: 'any' },
    // { path: '/signup', name: 'signup', isPrivate: false, role: null }, Don't need
    { id: 3, path: '/dashboard', name: 'Dashboard', isPrivate: true, role: 'any' },
    { id: 4, path: '/profile', name: 'Profile', isPrivate: true, role: 'any' },
    { id: 5, path: '/insights', name: 'Insights', isPrivate: true, role: 'admin' },
    { id: 6, path: '/store', name: 'Store', isPrivate: true, role: 'user' },
]