import { Injectable } from '@nestjs/common';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: boolean;
  imgUrl: string;
};

@Injectable()
export class productsRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Guitarra Acústica',
      description: 'Guitarra acústica de madera de caoba con cuerdas de acero.',
      price: 150.0,
      stock: true,
      imgUrl: 'https://example.com/img/guitarra-acustica.jpg',
    },
    {
      id: 2,
      name: 'Piano Eléctrico',
      description:
        'Piano eléctrico de 88 teclas con múltiples sonidos y efectos.',
      price: 600.0,
      stock: true,
      imgUrl: 'https://example.com/img/piano-electrico.jpg',
    },
    {
      id: 3,
      name: 'Batería Electrónica',
      description:
        'Batería electrónica compacta con pedal de bombo y pads sensibles.',
      price: 350.0,
      stock: false,
      imgUrl: 'https://example.com/img/bateria-electronica.jpg',
    },
    {
      id: 4,
      name: 'Violín',
      description: 'Violín de tamaño completo con arco y estuche incluido.',
      price: 200.0,
      stock: true,
      imgUrl: 'https://example.com/img/violin.jpg',
    },
    {
      id: 5,
      name: 'Saxofón',
      description: 'Saxofón alto de latón con llaves doradas y boquilla.',
      price: 450.0,
      stock: true,
      imgUrl: 'https://example.com/img/saxofon.jpg',
    },
    {
      id: 6,
      name: 'Flauta Traversera',
      description: 'Flauta traversera plateada con estuche y limpiador.',
      price: 120.0,
      stock: true,
      imgUrl: 'https://example.com/img/flauta-traversera.jpg',
    },
    {
      id: 7,
      name: 'Trompeta',
      description: 'Trompeta de latón con válvulas de acero inoxidable.',
      price: 300.0,
      stock: false,
      imgUrl: 'https://example.com/img/trompeta.jpg',
    },
    {
      id: 8,
      name: 'Guitarra Eléctrica',
      description:
        'Guitarra eléctrica con pastillas de alta salida y puente tremolo.',
      price: 400.0,
      stock: true,
      imgUrl: 'https://example.com/img/guitarra-electrica.jpg',
    },
    {
      id: 9,
      name: 'Teclado MIDI',
      description: 'Teclado MIDI de 49 teclas con controladores asignables.',
      price: 250.0,
      stock: true,
      imgUrl: 'https://example.com/img/teclado-midi.jpg',
    },
    {
      id: 10,
      name: 'Bajo Eléctrico',
      description:
        'Bajo eléctrico de 4 cuerdas con cuerpo de aliso y mástil de arce.',
      price: 500.0,
      stock: false,
      imgUrl: 'https://example.com/img/bajo-electrico.jpg',
    },
  ];
  getProducts() {
    return this.products;
  }
}
