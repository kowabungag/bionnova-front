// import React from 'react';
// import {Collapse} from 'antd';
// const {Panel} = Collapse;
//
// const children = (text) => {
//
//     return (
//         <div className="collapse_content">
//             <span>Критерии уровня:</span>
//
//             {/*{text.map(el =>*/}
//             {/*    < p>{el}</p>*/}
//             {/*)}*/}
//         </div>
//     )
// }
//
// const items = [
//     {
//         key: '1',
//         label: '1. Beginner (Начальный уровень)',
//         children: children(['Отсутствуют знания о фармаконадзоре', ' Интерес и мотивация к освоению новой специальности в данной сфере.'])
//     },
//     {
//         key: '2',
//         label: '2. Elementary (Элементарный уровень)',
//         children: children(['Присутствует понимание понятия фармаконадзора', ' Опыт в построении системы фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической компании.'])
//     },
//     {
//         key: '3',
//         label: '3. Intermediate (Средний уровень)',
//         children: children(['Знания и опыт работы в фармаконадзоре', ' Способность презентовать и/или оценить систему фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической или смежной отраслях.'])
//     },
//     {
//         key: '4',
//         label: '4. Advanced (Продвинутый уровень)',
//         children: children(['Знание ключевых аспектов фармаконадзора', ' Способность использования риск-ориентированного подхода', ' Готовность к внедрению лучших практик фармаконадзора.'])
//     },
//     {
//         key: '5',
//         label: '5. Extra (Специализированный уровень)',
//         children: children(['Знание ключевых аспектов фармаконадзора', ' Заинтересованность в отдельных, узкоспециализированных темах фармаконадзора', ' Мотивация к освоению и применению трендовых и инновационных направлений фармаконадзора.'])
//     },
//
// ];
//
// const LevelCollapse = ({program}) => {
//
//     return (
//         <div className="collapse">
//             <Panel items={items} />
//         </div>
//
//     );
// };
//
// export default LevelCollapse;

import React from 'react';
import { Collapse } from 'antd';
import { groupLevelCollapseData } from '@/helpers/groupLevelCollapseData';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './myCollapse.scss';

const LevelCollapse = () => {
  const { t } = useTranslation();
  const program = [
    {
      key: '1',
      label: `1. Beginner (${t('collapse.beginner')})`,
      children: `<ul><li>${t('levels.beginner.text1')}</li><li>${t(
        'levels.beginner.text2'
      )}</li></ul>`,
    },
    {
      key: '2',
      label: `2. Elementary (${t('collapse.elementary')})`,
      children: `<ul><li>${t('levels.elementary.text1')}</li><li>${t(
        'levels.elementary.text2'
      )}</li><li>${t('levels.elementary.text3')}</li></ul>`,
    },
    {
      key: '3',
      label: `3. Intermediate (${t('collapse.intermediate')})`,
      children: `<ul><li>${t('levels.intermediate.text1')}</li><li>${t(
        'levels.intermediate.text2'
      )}</li><li>${t('levels.intermediate.text3')}</li></ul>`,
    },
    {
      key: '4',
      label: `4. Advanced (${t('collapse.advanced')})`,
      children: `<ul><li>${t('levels.advanced.text1')}</li><li>${t(
        'levels.advanced.text2'
      )}</li><li>${t('levels.advanced.text3')}</li></ul>`,
    },
    {
      key: '5',
      label: `5. Extra (${t('collapse.extra')})`,
      children: `<ul><li>${t('levels.specialized.text1')}</li><li>${t(
        'levels.specialized.text2'
      )}</li><li>${t('levels.specialized.text3')}</li></ul>`,
    },
  ];

  // console.log(program.beginner)

  return (
    <div className="collapse">
      <Collapse className={'collapse_content'}>
        {program.map((item) => (
          <Panel header={<p className={'levelTitle'}>{item.label}</p>} key={item.key}>
            <span>{t('levels.title')}</span>
            <p className={'levelBody'} dangerouslySetInnerHTML={{ __html: item.children }}></p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default LevelCollapse;
