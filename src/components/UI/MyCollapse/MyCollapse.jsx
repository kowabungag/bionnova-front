'use client'
import React from 'react';
import {Collapse} from 'antd';
import "./myCollapse.scss";
import WebinarDescription from "@/components/Webinars/WebinarDescription/WebinarDescription";
import {useTranslation} from "react-i18next";
import LevelCollapse from "@/components/UI/MyCollapse/LevelCollapse";
import {convertDateFormat} from "@/helpers/convertTime";

const {Panel} = Collapse;

const renderWebinar = (webinar, index, flag,t) => {

    let data = {};
    if (flag === 'webinars') {
        data = webinar
    } else if (flag === 'programs') {
        data = webinar.attributes ? webinar.attributes : webinar
    }


    const webinarHeader = <div className='custom-header'>
        <div className="header-top">
            <p className='header-top__type'>{t('additional.webinar')}</p>
            {flag === 'webinars' && <p className='header-top__price'>{data.price} $</p>}
        </div>
        <div className="header-bottom">
            <p className='header-bottom__name'>{data.name}</p>
        </div>
    </div>

    return (
        <Panel header={webinarHeader} key={index + data.name}>
            <div className="collapse_content">
                <span>{data.dectriptionTitle}</span>
                <WebinarDescription   programTitle={data.descriptionSubtitle}
                                      webinarDescription={data.descriptionWebinar}
                />
                <div className='collapse_description'>
                    <p className='date'> {convertDateFormat(data.date)}</p>
                    <p className='teacher'>{data.teacher}</p>
                    <p className='duration'><span>{data.duration} {t('additional.minutes')}</span></p>
                    <p className='exactTime'><span>{data.exactTime}</span></p>
                </div>
            </div>
        </Panel>
    );
}

const renderProgram = (program, index, type,t) => {

    const webinarPanels = program.webbinarrs.data.map(webinar => renderWebinar(webinar, index, type,t));

    const programHeader = <div className='custom-header'>
        <div className="header-top">
            <p className='header-top__type'>{t('additional.program')}</p>
            <p className='header-top__price'>{program.price} $</p>
        </div>
        <div className="header-bottom">
            <p className='header-bottom__name'>{program.name}</p>
        </div>
    </div>

    return (
        <Panel header={programHeader} key={index}>
            {/* If you want each webinar to be its own collapsible panel, use a nested Collapse */}
            <Collapse>
                {webinarPanels}
            </Collapse>
        </Panel>
    );
}


const MyCollapse = ({programs,program, webinars, type}) => {
    const {t} = useTranslation()
    let panels = []


    if (type === 'programs') {
        panels = programs.map((program, index) => renderProgram(program, index, type,t));
    } else if (type === 'webinars') {
        panels = webinars.map((webinar, index) => renderWebinar(webinar, index, type,t));
    }



    return (
        <>
            {type === 'levels'?

                <LevelCollapse program={program}/>

                :
                <div
                    className={`
            collapse
               ${type === 'programs' && 'collapse-programs'}
               ${type === 'webinars' && 'collapse-webinars'}
                `
                    }
                >
                    <Collapse accordion>
                        {panels}
                    </Collapse>
                </div>
            }
        </>
    );

};

export default MyCollapse;


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
//
// import React from 'react';
// import {Collapse} from 'antd';
//
// // styles
// import "./myCollapse.scss"
//
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
// const itemsNest = [
//     {
//         key: '1',
//         label: 'This is panel nest panel',
//         children: children(['Клинические испытания']),
//     },
// ];
//
// const items = [
//     {
//         key: '1',
//         label: '1. Beginner (Начальный уровень)',
//         children: <Collapse items={itemsNest} />
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
// const MyCollapse = () => {
//     const onChange = (key) => {
//     };
//     return (<div className="collapse">
//             <Collapse items={items}  onChange={onChange}/>
//         </div>
//     )
// };
// export default MyCollapse;