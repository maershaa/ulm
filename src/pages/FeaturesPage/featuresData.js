import images from '../../assets/Featutes/featuresImg';

const featuresData = [
  {
    id: 1,
    title: 'Колектив',
    description: `Колектив нашого підприємства складається з високопрофесійних працівників із величезним досвідом роботи у жестетарному виробництві. Стаж провідних спеціалістів коливається від 15 до 40 років. Завдяки їхньому досвіду наше підприємство розробило та впровадило унікальне виробництво, здатне випускати високоякісну продукцію.`,
    imageSrc: images.team,
    alt: 'Колектив працівників',
  },
  {
    id: 2,
    title: 'Ціна',
    description: `За допомогою нестандартних рішень використання жерсті та допоміжних матеріалів, а також скорочуючи свої накладні витрати, ми добиваємося цині на наш виріб нижче за інших виробників зі збереженням високої якості.`,
    imageSrc: images.price,
    alt: 'Ціна продукції',
  },
  {
    id: 3,
    title: 'Обсяги',
    description: `Потужність нашого виробництва дозволяє забезпечити будь-який обсяг продукції найбільших виробників консервів.`,
    imageSrc: images.volumes,
    alt: 'Обсяги виробництва',
  },
  {
    id: 4,
    title: 'Доставка',
    description: `Для зручності споживачів ми надаємо послуги з доставки нашого товару.`,
    imageSrc: images.delivery,
    alt: 'Послуги з доставки',
  },
  {
    id: 5,
    title: 'Якість',
    description: `Жорсткий контроль стосується не тільки продукції, що випускається, але і вхідної жерсті, лаків, емалей, фарб. У своєму виробництві ми використовуємо складові від перевірених постачальників, які відповідають якості європейських стандартів.`,
    imageSrc: images.quality,
    alt: 'Контроль якості',
  },
  {
    id: 6,
    title: 'Відстрочка платежу',
    description: `Для перевірених клієнтів нашому підприємстві існує система гнучких відстрочок від 30 до 90 днів /факторинг/.`,
    imageSrc: images.paymentDeferral,
    alt: 'Відстрочка платежу',
  },
];

export default featuresData;