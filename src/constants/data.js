import images from './images';

const wines = [
  {
    title: 'Classic 3oz',
    price: '£14.50',
    tags: '3oz patty with red onion, gherkin, ketchup and American-style mustard on a brioche bun',
  },
  {
    title: 'American 3oz with Cheese',
    price: '16.00',
    tags: '3oz patty with American cheese, red onion, gherkin, ketchup and American-style mustard on a brioche bun',
  },
  {
    title: 'Skinny 3oz',
    price: '£12.00',
    tags: '3oz patty with no bun with your selection of one healthy side',
  },
  {
    title: 'Classic 6oz',
    price: '£16.00',
    tags: '6oz patty with red onion, gherkin, ketchup and American-style mustard on a brioche bun',
  },
  {
    title: 'American 6oz with Cheese',
    price: '£19.00',
    tags: '6oz patty with American cheese, red onion, gherkin, ketchup and American-style mustard on a brioche bun',
  },
];

const cocktails = [
  {
    title: 'The Pearson',
    price: '£20.50',
    tags: '6oz patty with American cheese, bacon, fried red onion, Pearsteen special sauce served on a toasted brioche bun',
  },
  {
    title: 'The Mega',
    price: '£23.25',
    tags: '2x 6oz patties with double cheese, double bacon, hashbrown and Pearsteen special sauce',
  },
  {
    title: 'The Southern',
    price: '£24.00',
    tags: 'Southern fried crispy chicken on lettuce, tomato and red onion with a spicy mayo served on a seeded brioche bun',
  },
  {
    title: 'The El Diablo',
    price: '£24.20',
    tags: 'Spicy marinated patty with Jalapeños and salsa, served on a toasted brioche bun',
  },
  {
    title: 'The Awesome',
    price: '£23.00',
    tags: '1x 6oz beef patty, 1x souther fried crispy chicken with red onion, gherkin, ketchup and American-style relish on a brioche bun',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Michelin Star',
    subtitle: '2023 Michelin Star Award',
  },
  {
    imgUrl: images.award02,
    title: 'Rising Star',
    subtitle: 'The Times Rising Star 2023',
  },
  {
    imgUrl: images.award03,
    title: 'Best of London',
    subtitle: 'The Guardian - Best Burgers 2023',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Chef',
    subtitle: 'TimeOut Magazine Outstanding Chef 2023',
  },
];
// eslint-disable-next-line
export default { wines, cocktails, awards };
