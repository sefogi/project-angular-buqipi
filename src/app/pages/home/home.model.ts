export interface Demo {
  name: string;
  image: string;
  url: string;
}

export interface Feature {
  icon?: string;
  name: string;
  shapes: string[]; // Debe ser un array si se utiliza en un *ngFor
  title: string; // Título del feature
  description: string; // Descripción
  image: string;
}
