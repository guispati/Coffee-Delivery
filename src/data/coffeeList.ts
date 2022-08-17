import Americano from '../assets/products/americano.png';
import Arabe from '../assets/products/arabe.png';
import CafeComLeite from '../assets/products/cafe-com-leite.png';
import CafeGelado from '../assets/products/cafe-gelado.png';
import Capuccino from '../assets/products/capuccino.png';
import ChocolateQuente from '../assets/products/chocolate-quente.png';
import Cubano from '../assets/products/cubano.png';
import ExpressoCremoso from '../assets/products/expresso-cremoso.png';
import Expresso from '../assets/products/expresso.png';
import Havaiano from '../assets/products/havaiano.png';
import Irlandes from '../assets/products/irlandes.png';
import Latte from '../assets/products/latte.png';
import Macchiato from '../assets/products/macchiato.png';
import Mocaccino from '../assets/products/mocaccino.png';

export interface Coffee {
    id: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
}

export const coffeeList: Coffee[] = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: ['tradicional'],
        price: 9.9,
        image: Expresso,
    },
    {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        tags: ['tradicional'],
        price: 9.9,
        image: Americano,
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        tags: ['tradicional'],
        price: 9.9,
        image: ExpressoCremoso,
    },{
        id: 4,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        tags: ['tradicional', 'gelado'],
        price: 9.9,
        image: CafeGelado,
    },
    {
        id: 5,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        tags: ['tradicional', 'com leite'],
        price: 9.9,
        image: CafeComLeite,
    },
    {
        id: 6,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        tags: ['tradicional', 'com leite'],
        price: 9.9,
        image: Latte,
    },
    {
        id: 7,
        name: 'Cappucino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        tags: ['tradicional', 'com leite'],
        price: 9.9,
        image: Capuccino,
    },
    {
        id: 8,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        tags: ['tradicional'],
        price: 9.9,
        image: Macchiato,
    },
    {
        id: 9,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        tags: ['tradicional', 'com leite'],
        price: 9.9,
        image: Mocaccino,
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        tags: ['especial', 'com leite'],
        price: 9.9,
        image: ChocolateQuente,
    },
    {
        id: 11,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        tags: ['especial', 'alcoólico', 'gelado'],
        price: 9.9,
        image: Cubano,
    },
    {
        id: 12,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        tags: ['especial'],
        price: 9.9,
        image: Havaiano,
    },
    {
        id: 13,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        tags: ['especial'],
        price: 9.9,
        image: Arabe,
    },{
        id: 12,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        tags: ['especial', 'alcoólico'],
        price: 9.9,
        image: Irlandes,
    },
]