import React from 'react';
import Comment from '../components/Comment';

let COMMENTS_ITEMS = [
  {
    id: 1,
    text:
      'Меня бесит в этой игре просто НЕВЕРОЯТОНОЕ КОЛИЧЕСТВО СОБИРАЛОК! Ловцы снов, наскальные рисунки, легендарная рыба, могилы, комплекты карточек (ну их хоть скупить в конце игры можно), кости динозавров, ОХОТНИЧЬИ, СУКА, ЗАКАЗЫ, КТО ИХ БЛЯТЬ ПРИДУМАЛ!',
    date: '12-11-18',
    user: {
      name: 'Sasha Gladov',
      img: 'https://leonardo.osnova.io/a0225cc7-5577-4ff1-e4b9-2670fb18f665/-/scale_crop/64x64/center/',
    },
    responses: [
      {
        id: 23,
        text: 'Бич современных игр с открытым миром, что поделать. Там ситуация ещё хуже чем в Dragon Age Inquisition?',
        user: {
          name: 'Дмитрий Байструков',
          img: 'https://leonardo.osnova.io/d67e4d64-6c54-11fd-d095-32995475ef14/-/scale_crop/64x64/center/',
        },
        responses: [
          {
            id: 232,
            text:
              'В DA не играл, но если ты RDR2 хочешь выбить на платину, как я, то будь готов к дрочилову. Помимо вышеперечисленного нужно добавить еще испытания, которые тоже могут задницу порвать (собрать все травы в игре, приготовить все виды мяса, заарканить все виды лошадей, ебануться короче). Игра невероятная, все дела, но это собидрочельство просто ужас.',
            user: {
              name: 'Sasha Gladov',
              img: 'https://leonardo.osnova.io/a0225cc7-5577-4ff1-e4b9-2670fb18f665/-/scale_crop/64x64/center/',
            },
            responses: [
              {
                id: 2322,
                text: 'Ну так для собидрочеров и существует платина, не?',
                user: {
                  name: 'Philip Vasilechnko',
                  img: 'https://leonardo.osnova.io/d3382577-c6c9-412a-b403-77f66f35a4ff/-/scale_crop/32x32/center/',
                },
                responses: [],
              },
              {
                id: 2323,
                text:
                  'Просто не выбивай платину, твои претензии выглядят тупо, тебя ведь никто не заставляет это делать.',
                user: {
                  name: 'Пердун Евосов',
                  img: 'https://leonardo.osnova.io/d3382577-c6c9-412a-b403-77f66f35a4ff/-/scale_crop/32x32/center/',
                },
                responses: [],
              },
              {
                id: 2324,
                text: 'Буэ. Ну хотя бы это ради ачивок, в инквизиции без этого нельзя было сюжетку проходить!',
                user: {
                  name: 'Дмитрий Байструков',
                  img: 'https://leonardo.osnova.io/d67e4d64-6c54-11fd-d095-32995475ef14/-/scale_crop/64x64/center/',
                },
                responses: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    text:
      'Ну во-первых куда вы все бежите?\n' +
      'Я супер медленно двигаюсь по сюжету, больше предпочитая эксплоринг, покер, рыбалку и охоту, например. Во-вторых, РДР во многом очень олдскульна и предлагает как раз таки перемежать сюжетку с сайдами и активностями, чтобы к финалу прийти 100%%-ным).\n' +
      'Ну и наконец ты охуэл критиковать игру столетия?\n' +
      'Игры Рокстар тебе ничего не должны)))',
    date: '12-11-18',
    user: {
      name: 'Petrucce',
      img: 'https://leonardo.osnova.io/c98ac43a-1ddf-4c93-a5dc-68103c1a7866/-/scale_crop/64x64/center/',
    },
    responses: [
      {
        id: 222,
        text:
          'Дрочить миниигры и мусорные побочные активности, вместо того, чтобы проходить лучшую часть игры. Действительно, зачем?',
        user: {
          name: 'lamurchik',
          img: 'https://leonardo.osnova.io/b500b520-0ca4-0007-5bcf-9f32d4615fc2/-/scale_crop/64x64/center/',
        },
        responses: [],
      },
      {
        id: 2222,
        text:
          'Ну по сюжету лично я шёл что бы новые механики открыть (продажа краденых лошадей только в конце третий главы например открывается). А ещё я надеялся нам дадут в ходе сюжета Ню-Остин открыть. А то, что ты все задания дополнительные к финалу пройдёшь игра не ценит. В эпилоге ни денег, ни коней не оставляют. Все "труды" прахом идут(((',
        user: {
          name: 'Антон Сусаков',
          img: 'https://leonardo.osnova.io/512d2c2a-6c7e-6b40-c8b2-0fd56c4e2386/-/scale_crop/64x64/center/',
        },
        responses: [
          {
            id: 24441,
            text:
              'Плюс все стволы в магазине появляются только в 6м акте. И некоторые чертежи. Так что наслаждайся приятель своим крутым стволом и харкающим кровью Артуром.',
            date: '12-11-18',
            user: {
              name: 'Yutah',
              img: 'https://leonardo.osnova.io/aae36f7d-22f4-dc23-3572-8d0b1fcf81ab/-/scale_crop/32x32/center/',
            },
            responses: []
          }
        ],
      },
    ],
  },
];

const Comments = ({ comments = COMMENTS_ITEMS }) =>
  comments.map(item => (
    <Comment item={item} key={item.id}>
      {item.responses.length > 0 ? <Comments comments={item.responses} /> : null}
    </Comment>
  ));

export default Comments;
