import spriteContent from '@/assets/icons.svg?raw';

// Спрайт нужно вставлять инлайном в DOM (а не подключать как отдельный файл
// через <use href="/icons.svg#id">), иначе браузер не даёт применять к иконкам
// CSS из родительских компонентов (fill/stroke не наследуются в "внешний" SVG).
// Поэтому один раз рендерим содержимое icons.svg прямо в документ,
// а дальше везде используем короткую ссылку: <use xlinkHref="#icon-name" />
const IconSprite = () => {
  return (
    <div
      style={{ display: 'none' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: spriteContent }}
    />
  );
};

export default IconSprite;
