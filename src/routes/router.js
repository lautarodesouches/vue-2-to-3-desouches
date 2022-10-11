export const routes = [
    {
        path: '/',
        name: 'Form',
        component: () => import('../views/Form.vue')
    },
    {
        path: '/data',
        name: 'Data',
        component: () => import('../views/Table.vue')
    }
]