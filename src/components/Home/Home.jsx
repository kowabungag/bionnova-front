// "use client"
// import React from "react";
// import {useSelector} from "react-redux";
// import {Link, Route, Routes, useLocation, useSearchParams} from "react-router-dom";
// import Image from "next/image";
//
// // helpers
// import {createProgramElement} from "@/helpers/createProgramElement";
// import {usePreviousRoute} from "@/hooks/usePreviousRoute";
//
// // components
// import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";
// import WebinarOverviewHome from "../Webinars/WebinarOverviewHome/WebinarOverviewHome";
// import ProgramElementDescriptionHome from "@/components/Programs/ProgramElementDescriptionHome/ProgramElementDescriptionHome";
// import WebinarListHome from "../Webinars/WebinarListHome/WebinarListHome";
// import ProgramsListHome from "../Programs/ProgramsListHome/ProgramsListHome";
// import MyCalendar from "../MyCalendar/MyCalendar";
//
// // styles
// import * as styles from "./home.module.scss";
//
// // assets
// import union from "../../app/media/images/home/union.svg";
// import laptop from "src/app/media/images/home/laptop.svg";
// import schedule from "src/app/media/images/home/schedule.svg"
// import about from "src/app/media/images/home/about.svg";
// import {removeUserData} from "@/helpers/userData";
// import MyLoader from "@/components/UI/MyLoader/MyLoader";
// import {getAllEventsWithSort, getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
// import {checkLanguage} from "@/helpers/checkLanguage";
//
//
// const Home = () => {
//     const {t} = useTranslation()
//
//     const navs = [
//         {id: 0, description: t('cabinet.webinar'), path: 'webinars', img: union},
//         {id: 1, description: t('cabinet.program'), path: 'programs', img: laptop},
//         {id: 2, description: t('cabinet.schedule'), path: 'schedule', img: schedule},
//         {id: 3, description: t('cabinet.aboutUs'), path: 'about-us', img: about},
//     ]
//
//     const [searchParams] = useSearchParams();
//     const location = useLocation()
//     const previousRoute = usePreviousRoute();
//
//     const user = useSelector(store => store.user);
//     const globalCourses = useSelector(store => store.courses);
//
//     const programSearch = Number(searchParams.get('program'));
//     const webinarSearch = Number(searchParams.get('webinar'));
//
//     const hashString = location.hash.substring(1)
//
//     const isLoading = user.isLoading && globalCourses.isLoading;
//
//     if (isLoading) {
//         return (
//             <MyLoader/>
//         )
//     }
//
//
//     const globalProgramsByLanguage = globalCourses.globalCoursesByLanguage.programs;
//     const globalWebinarsByLanguage = globalCourses.globalCoursesByLanguage.webinars;
//
//     const userWebinarsByLanguage = user.user.userCoursesByLanguage.webinars;
//     const userProgramsByLanguage = user.user.userCoursesByLanguage.programs;
//
//     let programElement
//
//     if (programSearch) {
//         programElement = createProgramElement(
//             globalProgramsByLanguage,
//             userProgramsByLanguage,
//             programSearch
//         )
//     }
//
//     if (webinarSearch) {
//         programElement = createProgramElement(
//             globalWebinarsByLanguage,
//             userWebinarsByLanguage,
//             webinarSearch
//         )
//     }
//
//     const isLanguageEnglish = checkLanguage('en')
//
//     const closestWebinars = getNearestEventsByKey(globalWebinarsByLanguage, "date", 3);
//     const userAvailableWebinars = sortProgramWebinars(userProgramsByLanguage, userWebinarsByLanguage, 'date', isLanguageEnglish)
//
//
//     return (
//         <div className={styles.root}>
//             <div className={styles.gridSidebar}>
//                 {navs.map(nav =>
//                     <div
//                         key={nav.id}
//                         className={`
//                         ${styles.block}
//                         ${hashString === nav.path ? styles.active : ''}
//                         `}>
//                         <Link to={`/home/${nav.path}/#${nav.path}`}>
//                             <div className={styles.blockElement}>
//                                 <Image src={nav.img} alt={laptop}/>
//                                 <p>{nav.description}</p>
//                             </div>
//                         </Link>
//                     </div>
//                 )}
//
//                 <div className={styles.block}>
//                     <div onClick={removeUserData} className={styles.blockElement}>
//                         <p>{t('header.exit')}</p>
//                     </div>
//                 </div>
//             </div>
//
//
//             <div className={styles.gridContent}>
//                 <div className={styles.contentWrapper}>
//                     <Routes>
//                         <Route
//                             path='/home/schedule/'
//                             element={
//                                 <MyCalendar
//                                     userPrograms={userProgramsByLanguage}
//                                     globalPrograms={globalProgramsByLanguage}
//                                     userAvailableWebinars={userAvailableWebinars}
//                                     globalWebinarsByLanguage={globalWebinarsByLanguage}
//                                 />
//                             }
//                         />
//                         <Route path='/home/webinars/' element={
//                             <div className={styles.webinarsRow}>
//                                 <div className={styles.column}>
//                                     <p className={styles.title}>{t('cabinet.availableToMe')}</p>
//                                     <div className={styles.content}>
//                                         <WebinarListHome isWebinarHome={true} webinars={userAvailableWebinars}/>
//                                     </div>
//                                 </div>
//                                 <div className={styles.column}>
//                                     <p className={styles.title}>{t('cabinet.nearest')}</p>
//                                     <div className={styles.content}>
//                                         <WebinarListHome isWebinarHome={true} webinars={closestWebinars}/>
//                                     </div>
//                                 </div>
//
//                             </div>
//                         }/>
//
//                         <Route path='/home/webinars/webinar/' element={
//                             <>
//                                     <WebinarOverviewHome
//                                         webinar={programElement}
//                                         userAvailableWebinars={userAvailableWebinars}
//                                         hashString={hashString}
//                                         previousRoute={previousRoute}/>
//                             </>
//
//                         }/>
//
//                         <Route path='/home/programs/' element={
//                             <div className={styles.programsRow}>
//                                 <ProgramsListHome
//                                     globalPrograms={globalProgramsByLanguage}
//                                     userPrograms={userProgramsByLanguage}
//                                 />
//                             </div>
//                         }/>
//                         <Route path='/home/programs/:id' element={
//                             <div className={styles.programDescriptioRow}>
//                                 <ProgramElementDescriptionHome program={programElement}/>
//                             </div>
//                         }/>
//
//                         <Route path='/home/programs/program/webinar' element={
//
//                             <div className={styles.programDescriptioRow}>
//
//                                 <WebinarOverviewHome
//                                     userAvailableWebinars={userAvailableWebinars}
//                                     previousRoute={previousRoute}
//                                     hashString={hashString}
//                                     webinar={programElement}
//                                 />
//                             </div>
//                         }/>
//
//                         <Route path='/home/about-us' element={
//
//                             <div className={styles.programDescriptioRow}>
//                                 <AboutUsHome/>
//                             </div>
//                         }/>
//
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Home;
