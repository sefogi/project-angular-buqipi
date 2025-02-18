// types
import {  Feature } from "./home.model"

//aqui se cambian las imagenes de los mockup de los celulares
export const features: Feature[] = [
    {
        icon: '',
        name: '',
        shapes: ['shape1', 'shape2'],
        title: 'Centralizamos la gestión de sus propiedades en un unico panel ',
        description: 'Gestión, cobros automaticos y más en un primer vistazo.',
        image: 'assets/images/features/app3.png',
    },
    {
        icon: 'layout',
        name: '',
        shapes: ['shape3', 'shape4'],
        title: "Disponibilidad y Reservas",
        description: 'Visualiza tu agenda de reservas de forma clara y organizada, para que nunca pierdas de vista tu disponibilidad.',
        image: 'assets/images/features/app4.png'
    },
    {
        icon: '',
        name: '',
        shapes: ['shape5', 'shape6'],
        title: 'Tarifas dinámicas con precios óptimos según la demanda local',
        description: "Reglas de cobro personalizadas y automaticas, configura precios dinámicos diarios en tiempo real.",
        image: 'assets/images/features/app4.png',
    }
    
    
];

export {  Feature }