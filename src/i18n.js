import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'ua' : 'ua',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      //en
      en: {
        translation: {
          levels: {
            title: 'Level Criteria:',
            beginner: {
              text1: 'Lack of knowledge about pharmacovigilance',
              text2: 'Interest and motivation to master a new specialty in this field',
            },
            elementary: {
              text1: 'There is an understanding of the concept of pharmacovigilance',
              text2: 'Experience in building a pharmacovigilance system',
              text3: 'Motivation for development and career growth in a pharmaceutical company',
            },
            intermediate: {
              text1: 'Knowledge and experience in pharmacovigilance',
              text2: 'Ability to present and/or evaluate a pharmacovigilance system',
              text3:
                'Motivation for development and career growth in the pharmaceutical or related industries',
            },
            advanced: {
              text1: 'Knowledge of key aspects of pharmacovigilance',
              text2: 'Ability to use a risk-based approach',
              text3: 'Willingness to implement the best pharmacovigilance practices',
            },
            specialized: {
              text1: 'Knowledge of key aspects of pharmacovigilance',
              text2: 'Interest in individual, highly specialized pharmacovigilance topics',
              text3:
                'Motivation for the development and application of trend and innovative areas of pharmacovigilance',
            },
          },
          servicesTopics: {
            farma: 'Pharmacovigilance',
            registration: 'Registration',
            gmp: 'GMP - certification',
            research: 'Clinical trials',
            title:
              'UNIVERSAL SCHOOL OF PHARMACOVIGILANCE & MEDICAL AFFAIRS provides its partners with comprehensive services the receipt of which have a number of significant advantages:',
            topic1: {
              title: 'Audits (pharmacovigilance systems, registration dossier)',
              text1:
                'a. Ensure compliance with regulations and requirements, reducing the risk of violations and fines',
              text2: 'b. Reducing the risk of medical errors',
              text3: 'c. Optimization of financial processes',
              text4: 'd. Increasing your competitiveness',
              text5: 'e. Ability to respond to changes in a timely manner',
              text6: 'f. Possibility of innovation',
            },
            topic2: {
              title: 'Consulting',
              text1: 'a. Our Expert knowledge and Experience',
              text2: 'b. Objectivity',
              text3: 'c. New ideas and approaches to problem solving',
              text4: 'd. Risk reduction',
              text5: 'e. Specialized expertise',
              text6: 'f. The ability for you to focus on your core business',
            },
            topic3: {
              title: 'Training',
              text1: 'a. Knowledge of current information',
              text2: 'b. Advanced training',
              text3: 'c. Improved career opportunities',
              text4: 'd. Improving operational efficiency',
              text5: 'e. Cooperation and exchange of experience',
              text6: 'f. Cooperation with regulators',
            },
            topic4: {
              title: 'Practical courses',
              text1: 'a. Acquiring practical skills',
              text2: 'b. Interaction with experienced experts in their field',
              text3: 'c. Receive always up-to-date information',
              text4: 'd. Consolidating theoretical knowledge in practice',
              text5: 'e. Opportunity for collaboration between participants',
              text6:
                'f. Certification confirming knowledge and skills in the field of pharmacovigilance, GMP certification, registration and clinical development in the pharmaceutical industry',
            },
          },

          feedback: {
            title: 'What our students say about us',
            subtitle:
              'Our participants share their experiences and impressions of their pharmacy and medicine courses. Testimonials from our course participants:',
            text1:
              'Our company is highly impressed by the level of expertise and professionalism that was provided to us during the audit of our pharmacovigilance system. We require that, thanks!',
            author1: 'Anna S.',
            text2:
              'The practical courses exceeded my expectations! I recommend these courses to everyone who wants to deepen their knowledge and skills in the field of pharmacovigilance!',
            author2: 'Dmitry P.',
            text3:
              'Thank you for the pharmacovigilance training course. Interacting with regulators during the training provided valuable insight into how the industry works in the real world. Thanks a lot!',
            author3: 'Ekaterina M.',
            text4:
              'I started with a clean slate and now, having completed the pharmacovigilance educational program, I feel confident in my new profession. Thank you for the opportunity to restart my career!',
            author4: 'Alexey K.',
          },
          home: {
            hero: {
              title1: 'Knowledge is',
              title2: 'the key to success',
              text1:
                'We are an innovative and independent educational platform where you can get innovation, knowledge and answers to complex questions in the field of pharmacovigilance, GMP certification, registration and clinical development in the pharmaceutical industry.',
            },
            plitc: {
              text1: 'Up-to-date and competent materials',
              subtext1: 'We provide access to the latest knowledge and practical tools',
              text2: 'Expert teachers and leading schools',
              subtext2: 'We cooperate with leading international experts in their field',
              text3: 'Interactivity and practice',
              subtext3:
                'Our training includes hands-on assignments, discussions and interactive exercises',
            },
            about: {
              text1: 'About us:',
              text2:
                'Our mission is to help professionals in the pharmaceutical and related industries make better decisions in the critical business processes',
              text3: '105+',
              text4: '116+',
              text5: '300+',
              text6: 'partners around the world',
              text7: 'released medicinal products',
              text8: 'registration procedures per year',
            },
            // need to add
            coach: {
              text1: 'Training from Leading Experts',
              text2:
                'Our main goal is to provide the needs of the market with the best specialists in their field. We do this by teaching professionals innovative concepts that they can only get from practicing experts.',
            },
          },
          aboutCompany: {
            hero: {
              text1: 'Our main goal',
              text2:
                'We train a culture of safe use of medicines through a universal approach for specialists of different skill levels.',
              text3: 'Join us and move forward towards professional growth and improvement.',
            },
            partner: {
              text1:
                'Your partner in the world of pharmaceutical education and professional development',
              text2:
                'Our platform specializes in providing high-quality information resources and training programs for professionals in the fields of pharmacovigilance, GMP certification, registration and clinical development in the pharmaceutical industry.',
            },
            base: {
              text1: 'Our main directions',
              text2: 'Registration',
              text3: 'Clinical researches',
              text4: 'Pharmacovigilance',
              text5: 'GMP certification',
            },
            choose: {
              text1: 'Why choose us:',
              text2:
                'BIOSCIENCE INNOVA is an international team of practicing professionals with successful experience in the regulatory sphere of the pharmaceutical industry in Ukraine since 2008.',
              text3:
                'To solve complex problems in modern therapy, we involve the best experts in their field from different countries, with whom we have deep long-term cooperation.',
            },
            advantages: {
              text1: 'Our main advantages:',
              text2: 'Up-to-date and competent materials',
              text3: 'Expert teachers and leading schools',
              text4: 'Interactivity and practice',
            },
            services: {
              text1: 'Providing comprehensive services to our partners',
              text2: 'Consulting',
              text3:
                'Receiving our consulting services gives you the opportunity to focus on the core aspects of your business',
              text4: 'Training',
              text5: 'Training on the platform helps optimize work processes and methods',
              text6: 'Audits',
              text7:
                'Receiving our audit service allows you to diagnose the state of the pharmacovigilance system and registration dossier',
              text8: 'Practical courses',
              text9:
                'Acquiring practical skills is an important tool for improving the skills and career development',
            },
            topics: {
              text1:
                'All of our courses and educational programs are designed and taught by an exclusive network of experts internationally recognized by their peers as opinion leaders in their field of expertise.',
              text2:
                'The training system we practice allows both to master the profession from scratch and improve your knowledge in a narrow specialization.',
              text3:
                'We are able to make complex scientific and clinical information more accessible to those who are not as well with the field.',
            },
            // choose:{
            //     text1: '',
            //     text2: '',
            //     text3: '',
            // }
          },
          collapse: {
            beginner: 'Beginner level',
            elementary: 'Elementary level',
            intermediate: 'Intermediate level',
            advanced: 'Advanced level',
            extra: 'Specialized level',
          },
          login: {
            accountLogin: 'Account Login',
            login: 'Login',
            password: 'Password',
          },
          toast: {
            message: {
              success: 'Message sent successfully!',
              failed: 'Failed to send message. Please try again later.',
            },
            login: {
              success: 'Login has been successfully completed!',
              failed: 'Login or password is not correct',
            },
            basket: {
              success: 'You have successfully added this product to your cart.',
              failed: 'You have already added this product to your cart.',
            },
          },
          cabinet: {
            back: 'Back',
            all: 'All',
            webinar: 'Webinars',
            program: 'Programs',
            onlyMy: 'Only mine',
            schedule: 'schedule',
            aboutUs: 'about us',
            availableToMe: 'Available to me',
            nearest: 'Nearest',
            watchOnYouTube: 'Watch on YouTube',
            downloadLecture: 'Download lecture notes',
            downloadPresentation: 'Download presentation',
            backToProgram: 'Back to program',
            open: 'Open',
            buy: 'Buy',
            buyProgram: 'Buy Program',
            studentsSaying: 'What our students are saying our students',
            participantsExperiences:
              'Our participants share their experiences and impressions of their pharmacy and medicine courses.',
            testimonials: 'Testimonials from our course participants:',
            trust: 'Trust in experience and quality',
            about:
              'We are a pharmaceutical company trusted by millions. Trust us and let us take care of your well-being. Together we are creating the future of health and comfort.',
            products: 'Products launched',
            partners: 'Our global partners',
            yearsOnMarket: 'Years on the medical market',
          },
          additional: {
            data: 'Date',
            coach: 'Coach',
            program: 'Program',
            format: 'Format',
            exactTime: 'Time',
            minutes: 'minutes',
            beginning: 'Beginning',
            webinars: 'Webinars',
            webinar: 'Webinar',
            open: 'Open',
            addToBasket: 'Add to cart',
            oneParticipant: '1 participant',
            fewParticipant: '3 or more participants',
            manyParticipant: '5 or more participants',
            fiveDiscount: '5% discount',
            tenDiscount: '10% discount',
            activities: 'Activities',
            contacts: 'Contacts',
            contactsDescription: 'You can send your email address and we will get back to you.',
            address: 'Kyiv, Tarasivska street, 4-A, office 7',
            enter: 'Enter',
            enroll: 'Enroll',
            ourCalendar: 'Our Calendar',
            checkLevel: 'Check the level of individual training',
            publicOffer: 'Public offer',
            privacy: 'Privacy policy',
            level: 'Training Level:',
            webinarDescribe: 'The webinar reveals the following points:',
          },
          header: {
            about: 'about company',
            services: 'services',
            events: 'events',
            contacts: 'contacts',
            main: 'Home',
            basket: 'Shopping cart',
            account: 'account',
            exit: 'exit',
          },
          services: {
            services: 'Services',
            training: 'Training Programs',
            webinars: 'Lectures and webinars',
            description: 'Description',
            webinarDescription: 'The webinar covers the following items:',
            program: 'Program',
            webinarsInProgram: 'Webinars in the program',
            levels: 'Levels of professional training',
          },
          individual: {
            order: 'Order individual training',
            text1:
              'You can order a consultation, a diagnostic audit, a webinar for your team or a conference organization. Offline or Online',
            text2:
              'Please fill out the feedback form and specify the desired topic of the webinar or the name of the program, and we will choose for you the optimal composition of the specialist and convenient format.',
          },
          form: {
            title: 'Your order',
            empty: 'Your cart is empty',
            amount: 'Amount',
            cancel: 'Cancel',
            send: 'Send',
            name: 'Name',
            phone: 'Phone',
            email: 'E-mail',
            them: 'Webinar topic or program',
            short: 'Too Short!',
            long: 'Too Long!',
            nameIsRequired: 'Name is required',
            phoneIsNotValid: 'Phone number is not valid',
            phoneIsRequired: 'Phone is required',
            invalidEmail: 'Invalid email',
            emailIsRequired: 'Email is required',
            topicIsRequired: 'Topic is required',
          },
          // main: {
          //     title1: 'Знания это',
          //     title2: 'ключ к успеху',
          //     subtext: 'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
          //     box1: {
          //         text1: 'Актуальные и компетентные материалы',
          //         subtext1: 'Мы обеспечиваем доступ к самым современным знаниям и практическим инструмента',
          //         text2: ' Экспертные преподаватели и ведущие школы',
          //         subtext2: 'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
          //         text3: 'Интерактивность и практика',
          //         subtext3: 'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
          //     },
          //     box2: {
          //         text1: 'ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ',
          //     }
          // }
        },
      }, //ru
      ru: {
        translation: {
          levels: {
            title: 'Критерии уровня:',
            beginner: {
              text1: 'Отсутствуют знания о фармаконадзоре',
              text2: 'Интерес и мотивация к освоению новой специальности в данной сфере',
            },
            elementary: {
              text1: 'Присутствует понимание понятия фармаконадзора',
              text2: 'Опыт в построении системы фармаконадзора',
              text3: 'Мотивация к развитию и карьерному росту в фармацевтической компании',
            },
            intermediate: {
              text1: 'Знания и опыт работы в фармаконадзоре',
              text2: 'Способность презентовать и/или оценить систему фармаконадзора',
              text3:
                'Мотивация к развитию и карьерному росту в фармацевтической или смежной отраслях',
            },
            advanced: {
              text1: 'Знание ключевых аспектов фармаконадзора',
              text2: 'Способность использования риск-ориентированного подхода',
              text3: 'Готовность к внедрению лучших практик фармаконадзора',
            },
            specialized: {
              text1: 'Знание ключевых аспектов фармаконадзора',
              text2: 'Заинтересованность в отдельных, узкоспециализированных темах фармаконадзора',
              text3:
                'Мотивация к освоению и применению трендовых и инновационных направлений фармаконадзора',
            },
          },
          servicesTopics: {
            farma: 'Фармаконадзор',
            registration: 'Регистрация',
            gmp: 'GMP - сертификация',
            research: 'Клинические исследования',
            title:
              'Universal School of Pharmacovigilance & Medical affairs предоставляет своим партнерам комплексные услуги, получение которых имеет много значительных преимуществ:',
            topic1: {
              title: 'Аудиты (системы фармаконадзора, регистрационного досье)',
              text1:
                'a. Обеспечение соответствия нормативам и требованиям, уменьшая риск нарушений и штрафов',
              text2: 'b. Уменьшение риска медицинских ошибок',
              text3: 'c. Оптимизация финансовых процессов',
              text4: 'd. Повышение вашей конкурентноспособности',
              text5: 'e. Возможность своевременно реагировать на изменения',
              text6: 'f. Возможность внедрения инноваций',
            },
            topic2: {
              title: 'Консалтинг',
              text1: 'a. Наши экспертные знания и опыт ',
              text2: 'b. Объективность',
              text3: 'c. Новые идеи и подходы к решению проблем',
              text4: 'd. Уменьшение рисков',
              text5: 'e. Специализированная экспертиза',
              text6: 'f. Возможность вашего фокусирования на основной деятельности',
            },
            topic3: {
              title: 'Обучение ',
              text1: 'a. Знание актуальной информации',
              text2: 'b. Повышение квалификации',
              text3: 'c. Улучшение карьерных возможностей',
              text4: 'd. Повышение эффективности работы',
              text5: 'e. Сотрудничество и обмен опытом',
              text6: 'f. Сотрудничество с регуляторами',
            },
            topic4: {
              title: 'Практические курсы',
              text1: 'a. Приобретение практических навыков',
              text2: 'b. Взаимодействие с опытными экспертами в своей сфере ',
              text3: 'c. Получение всегда актуальной информации',
              text4: 'd. Закрепление теоретических знаний на практике',
              text5: 'e. Возможность сотрудничества между участниками',
              text6:
                'f. Сертификация, подтверждающая знания и навыки в сфере фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли ',
            },
          },

          feedback: {
            title: 'Что говорят о нас наши ученики',
            subtitle:
              'Наши участники разделяют свой опыт и впечатления от прохождения курсов фармацевтики и медицины. Отзывы участников наших курсов:',
            author1: 'Анна С.',
            text1:
              'Наша компания очень впечатлена уровнем экспертизы и профессионализмом, которые нам предоставили при аудите нашей системы фармаконадзора. Это именно то, что было нам нужно, спасибо!',
            text2:
              'Практические курсы превзошли мои ожидания! Рекомендую эти курсы всем, кто стремится углубить свои знания и умения в сфере фармаконадзора!',
            author2: 'Дмитрий П.',
            text3:
              'Прошла курс обучения по фармаконадзору. Взаимодействие с регуляторами в процессе обучения это ценный взгляд на то, как работает отрасль в реальных условиях. Спасибо за возможность!',
            author3: 'Екатерина М.',
            text4:
              'Я начала с чистого листа, и теперь, завершив обучающую программу по фармаконадзору, чувствую себя уверенно в новой профессии. Спасибо за возможность перезапустить свою карьеру!',
            author4: 'Алексей К.',
          },
          home: {
            hero: {
              title1: 'Знания это',
              title2: 'ключ к успеху',
              text1:
                'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
            },
            plitc: {
              text1: 'Актуальные и компетентные материалы',
              subtext1:
                'Мы обеспечиваем доступ к самым современным знаниям и практическим инструментам',
              text2: 'Экспертные преподаватели и ведущие школы',
              subtext2:
                'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
              text3: 'Интерактивность и практика',
              subtext3:
                'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
            },
            about: {
              text1: 'О нас',
              text2:
                'Наша миссия заключается в том, чтобы помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные решения в критических бизнес-процессах',
              text3: '105+',
              text4: '116+',
              text5: '300+',
              text6: 'партнеров по всему миру',
              text7: 'выпущенных препаратов',
              text8: 'регистрационных процедур в год',
            },
            // need to add
            coach: {
              text1: 'Обучение от Ведущих Экспертов',
              text2:
                'Наша главная цель это обеспечение потребностей рынка лучшими специалистами в своей области. Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить только у практикующих экспертов.',
            },
          },
          aboutCompany: {
            hero: {
              text1: 'Наша главная цель',
              text2:
                'Мы обучаем культуре безопасного применения лекарственных средств путем универсального подхода для специалистов разного уровня квалификации',
              text3:
                'Присоединяйтесь к нам и двигайтесь вперед к профессиональному росту и совершенствованию.',
            },
            partner: {
              text1: 'Ваш партнер в мире фармацевтического образования и профессионального роста',
              text2:
                'Наша платформа специализируется на предоставлении высококачественных информационных ресурсов и обучающих программ для специалистов в сфере фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
            },
            base: {
              text1: 'Наши основные направления',
              text2: 'Регистрация',
              text3: 'Клинические исследования',
              text4: 'Фармаконадзор',
              text5: 'GMP-сертификация',
            },
            choose: {
              text1: 'Почему мы:',
              text2:
                'Bioscience Innova это международная команда практикующих профессионалов, имеющая успешный опыт работы в регуляторной сфере фармацевтической отрасли Украины, начиная с 2008 года. ',
              text3:
                'Для решения сложных задач в современной терапии нами привлекаются лучшие эксперты в своей отрасли из разных стран, с которыми имеем глубокое многолетнее сотрудничество.',
            },
            advantages: {
              text1: 'Наши основные преимущества:',
              text2: 'Актуальные и компетентные материалы',
              text3: 'Экспертные преподаватели и ведущие школы',
              text4: 'Интерактивность и практика',
            },
            services: {
              text1: 'Предоставление комплексных услуг своим партнерам ',
              text2: 'КОНСАЛТИНГ',
              text3:
                'Получение наших консалтинговых услуг дает вам возможность сосредоточиться на основных аспектах вашего бизнеса',
              text4: 'ОБУЧЕНИЕ',
              text5: 'Обучение на платформе помогает оптимизировать рабочие процессы и методы',
              text6: 'АУДИТЫ',
              text7:
                'Получение услуги нашего аудита позволяет провести диагностику состояния системы фармаконадзора, регистрационного досье',
              text8: 'ПРАКТИЧЕСКИЕ КУРСЫ',
              text9:
                'Приобретение практических навыков является важным инструментом для повышения квалификации',
            },
            topics: {
              text1:
                'Все наши курсы обучения и образовательные программы разработаны и преподаются эксклюзивной сетью экспертов, признанных на международном уровне своими коллегами как лидеры общественного мнения в своей области знаний. \n',
              text2:
                'Практикуемая нами система обучения позволяет как освоить профессию с чистого листа, так и усовершенствовать свои знания в узкой специализации.',
              text3:
                'Мы умеем делать сложную научную и клиническую информацию более доступной для тех, кто не так хорошо знаком с этой областью.',
            },
            // choose:{
            //     text1: '',
            //     text2: '',
            //     text3: '',
            // }
          },
          login: {
            accountLogin: 'Вход в аккаунт',
            login: 'Логин',
            password: 'Пароль',
          },
          toast: {
            message: {
              success: 'Сообщение отправлено успешно!',
              failed: 'Не удалось отправить сообщение. Пожалуйста, повторите попытку позже',
            },
            login: {
              success: 'Вход в систему успешно завершен!',
              failed: 'Логин или пароль не верны',
            },
            basket: {
              success: 'Вы успешно добавили этот товар в корзину',
              failed: 'Вы уже добавили этот товар в корзину',
            },
          },
          cabinet: {
            back: 'Назад',
            all: 'Все',
            webinar: 'Вебинары',
            program: 'Программы',
            onlyMy: 'Только мои',
            schedule: 'расписание',
            aboutUs: 'о нас',
            availableToMe: 'Доступно для меня',
            nearest: 'Ближайшие',
            watchOnYouTube: 'Смотреть на YouTube',
            downloadLecture: 'Скачать конспект лекций',
            downloadPresentation: 'Скачать презентацию',
            backToProgram: 'Вернуться к программе',
            open: 'Открыть',
            buy: 'Купить',
            buyProgram: 'Купить программу',

            studentsSaying: 'Что говорят наши ученики',
            participantsExperiences:
              'Наши участники разделяют свой опыт и впечатления от прохождения курсов фармацевтики и медицины.',
            testimonials: 'Отзывы участников наших курсов:',
            trust: 'Доверьтесь опыту и качеству',
            about:
              'Мы — фармацевтическая компания, которой доверяют миллионы. Доверьтесь нам и позвольте нам заботиться о вашем благополучии. Вместе мы создаем будущее здоровья и комфорта.',
            products: 'Выпущенных препаратов',
            partners: 'Наших мировых партнеров',
            yearsOnMarket: 'Лет на медицинском рынке',
          },
          // {t('additional.minutes')}
          additional: {
            data: 'Дата',
            coach: 'Тренер',
            program: 'Программа',
            format: 'Формат',
            exactTime: 'Время проведения',
            minutes: 'минут',
            beginning: 'Начало',
            webinars: 'Вебинаров',
            webinar: 'Вебинар',
            open: 'Открыть',
            addToBasket: 'Добавить в корзину',
            oneParticipant: '1 участник',
            fewParticipant: '3 и более участников',
            manyParticipant: '5 и более участников',
            fiveDiscount: '5% скидка',
            tenDiscount: '10% скидка',
            activities: 'Мероприятия',
            contacts: 'Контакты',
            contactsDescription: 'Вы можете отправить свой електронный адрес и мы свяжемся с вами.',
            address: 'город Киев, улица Тарасовская, дом 4-А, офис 7',
            enter: 'Войти',
            enroll: 'Записаться',
            ourCalendar: 'Наш Календарь',
            checkLevel: 'Проверить уровень индивидуальной подготовки',
            publicOffer: 'Публичная оферта',
            privacy: 'Политика конфиденциальности',
            level: 'Уровень подготовки:',
            webinarDescribe: 'Вебинар раскрывает следующие пункты:',
          },
          header: {
            about: 'о компании',
            services: 'услуги',
            events: 'мероприятия',
            contacts: 'контакты',
            main: 'главная',
            basket: 'Корзина',
            account: 'Аккаунт',
            exit: 'Выйти',
          },
          services: {
            services: 'Услуги',
            training: 'Программы обучения',
            webinars: 'Лекции и вебинары',
            description: 'Описание',
            webinarDescription: 'Вебинар раскрывает следующие пункты:',
            program: 'Программа',
            webinarsInProgram: 'Вебинары в программе',
            levels: 'Уровни профессиональной подготовки',
          },
          individual: {
            order: 'Заказать индивидуальное обучение',
            text1:
              'Вы можете заказать консультацию, диагностический аудит, проведение вебинара для своей команды или организацию конференции оффлайн или онлайн.',
            text2:
              'Заполните, пожалуйста, форму обратной связи и укажите желаемую тему вебинара или название программы, а мы подберем для Вас оптимальный состав специалистов и удобный формат.',
          },
          form: {
            title: 'Ваш заказ',
            empty: 'Ваша корзина пуста',
            amount: 'Сумма',
            cancel: 'Отменить',
            send: 'Отправить',
            name: 'Имя',
            phone: 'Телефон',
            email: 'E-mail',
            them: 'Тема вебинара или программа',
            short: 'Слишком коротко!',
            long: 'Слишком длинный!',
            nameIsRequired: 'Имя обязательно',
            phoneIsNotValid: 'Номер телефона не действителен',
            phoneIsRequired: 'Телефон обязателен',
            invalidEmail: 'Неверный e-mail',
            emailIsRequired: 'Email обязателен',
            topicIsRequired: 'Тема обязательна',
          },
          collapse: {
            beginner: 'Начальный уровень',
            elementary: 'Элементарный уровень',
            intermediate: 'Средний уровень',
            advanced: 'Продвинутый уровень',
            extra: 'Специализированный уровень',
          },
        },
      },
      // ua
      ua: {
        translation: {
          levels: {
            title: 'Критерії рівня:',
            beginner: {
              text1: 'Відсутні знання про фармаконагляд',
              text2: 'Зацікавлення та мотивація до освоєння нової спеціальності у цій сфері',
            },
            elementary: {
              text1: 'Є розуміння поняття фармаконагляду',
              text2: 'Досвід у побудові системи фармаконагляду',
              text3: "Мотивація до розвитку та кар'єрного зростання у фармацевтичній компанії",
            },
            intermediate: {
              text1: 'Знання та досвід роботи у фармаконагляді',
              text2: 'Здатність презентувати та/або оцінити систему фармаконагляду',
              text3:
                "Мотивація до розвитку та кар'єрного зростання у фармацевтичній чи суміжній галузях",
            },
            advanced: {
              text1: 'Знання ключових аспектів фармаконагляду',
              text2: 'Здатність використання ризик-орієнтованого підходу',
              text3: 'Готовність до впровадження найкращих практик фармаконагляду',
            },
            specialized: {
              text1: 'Знання ключових аспектів фармаконагляду',
              text2: 'Зацікавленість в окремих, вузькоспеціалізованих темах фармаконагляду',
              text3:
                'Мотивація до освоєння та застосування трендових та інноваційних напрямків фармаконагляду',
            },
          },
          servicesTopics: {
            farma: 'Фармаконагляд',
            registration: 'Реєстрація',
            gmp: 'GMP - сертифікація',
            research: 'Клінічні дослідження',
            title:
              'UNIVERSAL SCHOOL OF PHARMACOVIGILANCE & MEDICAL AFFAIRS надає своїм партнерам комплексні послуги, здобуття яких має багато значних переваг:',
            topic1: {
              title: 'Аудити (системи фармаконагляду, реєстраційного досьє)',
              text1:
                'a. Забезпечення відповідності нормативам та вимогам, зменшуючи ризик порушень та штрафів',
              text2: 'b. Зменшення ризику медичних помилок',
              text3: 'c. Оптимізація фінансових процесів',
              text4: 'd. Підвищення вашої конкурентоспроможності',
              text5: 'e. Можливість своєчасно реагувати на зміни',
              text6: 'f. Можливість впровадження інновацій',
            },
            topic2: {
              title: 'Консалтинг',
              text1: 'a. Наші експертні знання та досвід',
              text2: "b. Об'єктивність",
              text3: 'c. Нові ідеї та підходи до вирішення проблем',
              text4: 'd. Зменшення ризиків',
              text5: 'e. Спеціалізована експертиза',
              text6: 'f. Можливість вашого фокусування на основній діяльності',
            },
            topic3: {
              title: 'Навчання',
              text1: 'a. Знання актуальної інформації',
              text2: 'b. Підвищення кваліфікації',
              text3: "c. Поліпшення кар'єрних можливостей",
              text4: 'd. Підвищення ефективності роботи',
              text5: 'e. Співпраця та обмін досвідом',
              text6: 'f. Співпраця з регуляторами',
            },
            topic4: {
              title: 'Практичні курси',
              text1: 'a. Набуття практичних навичок',
              text2: 'b. Взаємодія з досвідченими експертами у своїй сфері',
              text3: 'c. Отримання завжди актуальної інформації',
              text4: 'd. Закріплення теоретичних знань на практиці',
              text5: 'e. Можливість співпраці між учасниками',
              text6:
                'f. Сертифікація, що підтверджує знання та навички у сфері фармаконагляду, GMP-сертифікації, реєстрації та клінічного розвитку у фармацевтичній галузі',
            },
          },
          feedback: {
            title: 'Що говорять про нас наші учні',
            subtitle:
              'Наші учасники поділяють свій досвід і враження від проходження курсів фармацевтики та медицини. Відгуки учасників наших курсів:',
            text1:
              'Наша компанія надзвичайно вражена рівнем експертизи та професіоналізмом, які нам надали при аудиті нашої системи фармаконагляду. Це саме те, що нам було потрібно, раді співпраці!',
            author1: 'Анна С.',
            text2:
              'Практичні курси перевершили мої очікування! Рекомендую ці курси всім, хто прагне поглибити свої знання та вміння у сфері фармаконагляду!',
            author2: 'Дмитро П.',
            text3:
              'Дякую за курс навчання по фармаконагляду. Взаємодія з регуляторами в процесі навчання дала цінний погляд на те, як працює галузь у реальних умовах. Ще раз дякую за таку можливість!',
            author3: 'Катерина М.',
            text4:
              "Я розпочала з чистого аркуша, і тепер, завершивши навчальну програму по фармаконагляду, відчуваю себе впевнено в новій професії. Дякую за можливість перезапустити свою кар'єру!",
            author4: 'Олексій К.',
          },
          home: {
            hero: {
              title1: 'Знання це',
              title2: 'ключ до успіху',
              text1:
                'Ми є інноваційною та незалежною освітньою платформою, на якій можна отримати інновації, знання та відповіді на складні питання у сфері фармаконагляду, GMP-сертифікації, реєстрації та клінічного розвитку у фармацевтичній галузі.',
            },
            plitc: {
              text1: 'Актуальні та компетентні матеріали',
              subtext1: 'Ми забезпечуємо доступ до найсучасніших знань та практичних інструментів',
              text2: 'Експертні викладачі та провідні школи',
              subtext2:
                'Ми співпрацюємо з провідними у своїй сфері фахівцями міжнародного значення',
              text3: 'Інтерактивність та практика',
              subtext3: 'Наше навчання включає практичні завдання, дискусії та інтерактивні вправи',
            },
            about: {
              text1: 'Про нас',
              text2:
                'Наша місія полягає в тому, щоб допомогти фахівцям у фармацевтичній та суміжній галузях приймати більш ефективні рішення в критичних бізнес-процесах.',
              text3: '105+',
              text4: '116+',
              text5: '300+',
              text6: 'партнерів по всьому світу',
              text7: 'випущених препаратів',
              text8: 'реєстраційних процедур на рік',
            },
            // need to add
            coach: {
              text1: 'Навчання від Провідних Експертів',
              text2:
                'Наша головна мета є забезпечення потреб ринку найкращими фахівцями у своїй галузі. Ми робимо це, навчаючи фахівців інноваційним концепціям, які вони можуть отримати тільки у практикуючих експертів.',
            },
          },
          aboutCompany: {
            hero: {
              text1: 'Наша головна мета',
              text2:
                'Ми навчаємо культурі безпечного застосування лікарських засобів шляхом універсального підходу для фахівців різного рівня кваліфікації.',
              text3:
                'Приєднуйтесь до нас та рухайтеся вперед до професійного зростання та вдосконалення.',
            },
            partner: {
              text1: 'Ваш партнер у світі фармацевтичної освіти та професійного зростання',
              text2:
                'Наша платформа спеціалізується на наданні високоякісних інформаційних ресурсів та навчальних програм для фахівців у сфері фармаконагляду, GMP-сертифікації, реєстрації та клінічного розвитку у фармацевтичній галузі.',
            },
            base: {
              text1: 'Наші основні напрямки:',
              text2: 'Реєстрація',
              text3: 'Клінічні дослідження',
              text4: 'Фармаконагляд',
              text5: 'GMP-сертифікація',
            },
            choose: {
              text1: 'Чому ми:',
              text2:
                'BIOSCIENCE INNOVA це міжнародна команда практикуючих професіоналів, яка має успішний досвід роботи у регуляторній сфері фармацевтичної галузі України, починаючи з 2008 року.',
              text3:
                'Для вирішення складних завдань у сучасній терапії нами залучаються найкращі експерти у своїй галузі з різних країн, з якими маємо глибоке багаторічне співробітництво.',
            },
            advantages: {
              text1: 'Наші основні переваги:',
              text2: 'Актуальні та компетентні матеріали',
              text3: 'Експертні викладачі та провідні школи',
              text4: 'Інтерактивність та практика',
            },
            services: {
              text1: 'Надання комплексних послуг своїм партнерам',
              text2: 'Консалтинг',
              text3:
                'Отримання наших консалтингових послуг надає можливість зосередитись на основних аспектах вашого бізнесу',
              text4: 'Навчання',
              text5: 'Навчання на платформі допомагає оптимізувати робочі процеси та методи',
              text6: 'Аудити',
              text7:
                'Отримання послуги нашого аудиту дозволяє провести діагностику стану системи фармаконагляду, реєстраційного досьє',
              text8: 'Практичні курси',
              text9:
                'Придбання практичних навичок є важливим інструментом для підвищення кваліфікації',
            },
            topics: {
              text1:
                'Всі наші курси навчання та освітні програми розроблені та викладаються ексклюзивною мережею експертів, визнаних на міжнародному рівні своїми колегами як лідери громадської думки у своїй галузі знань.',
              text2:
                'Система навчання, яку ми практикуємо, дозволяє як освоїти професію з чистого аркуша, так і вдосконалити свої знання у вузькій спеціалізації.',
              text3:
                'Ми вміємо робити складну наукову та клінічну інформацію більш доступною для тих, хто не так добре знайомий із цією областю.',
            },
            // choose:{
            //     text1: '',
            //     text2: '',
            //     text3: '',
            // }
          },
          collapse: {
            beginner: 'Початковий рівень',
            elementary: 'Елементарний рівень',
            intermediate: 'Середній рівень',
            advanced: 'Просунутий рівень',
            extra: 'Спеціалізований рівень',
          },
          login: {
            accountLogin: 'Вхід в акаунт',
            login: 'Логін',
            password: 'Пароль',
          },
          toast: {
            message: {
              success: 'Повідомлення відправлено успішно!',
              failed: 'Не вдалося надіслати повідомлення. Будь ласка, повторіть спробу пізніше',
            },
            login: {
              success: 'Вхід у систему успішно завершено!',
              failed: 'Логін або пароль не вірні',
            },
            basket: {
              success: 'Ви успішно додали цей товар у кошик',
              failed: 'Ви вже додали цей товар у кошик',
            },
          },
          cabinet: {
            back: 'Назад',
            all: 'Усі',
            webinar: 'Вебінари',
            program: 'Програми',
            onlyMy: 'Тільки мої',
            schedule: 'розклад',
            aboutUs: 'про нас',
            availableToMe: 'Доступно для мене',
            nearest: 'Найближчі',
            watchOnYouTube: 'Дивитися на YouTube',
            downloadLecture: 'Завантажити конспект',
            downloadPresentation: 'Завантажити презентацію',
            backToProgram: 'Повернутися до програми',
            open: 'Відкрити',
            buy: 'Купити',
            buyProgram: 'Купити програму',

            studentsSaying: 'Що кажуть наші учні',
            participantsExperiences:
              'Наші учасники поділяють свій досвід і враження від проходження курсів фармацевтики та медицини.',
            testimonials: 'Відгуки учасників наших курсів:',
            trust: 'Довіртеся досвіду та якості',
            about:
              "Ми - фармацевтична компанія, якій довіряють мільйони. Довіртеся нам і дозвольте нам піклуватися про ваше благополуччя. Разом ми створюємо майбутнє здоров'я і комфорту.",
            products: 'Випущених препаратів',
            partners: 'Наших світових партнерів',
            yearsOnMarket: 'Років на медичному ринку',
          },
          additional: {
            data: 'Дата',
            coach: 'Тренер',
            program: 'Програма',
            format: 'Формат',
            exactTime: 'Час проведення',
            minutes: 'хвилин',
            beginning: 'Початок',
            webinars: 'Вебінарів',
            webinar: 'Вебінар',
            open: 'Відкрити',
            addToBasket: 'Додати в кошик',
            oneParticipant: '1 учасник',
            fewParticipant: '3 і більше учасників',
            manyParticipant: '5 і більше учасників',
            fiveDiscount: '5% знижка',
            tenDiscount: '10% знижка',
            activities: 'Заходи',
            contacts: 'Контакти',
            contactsDescription:
              "Ви можете надіслати свою електронну адресу і ми зв'яжемося з вами.",
            address: 'місто Київ, вулиця Тарасівська, будинок 4-А, офіс 7',
            enter: 'Увійти',
            enroll: 'Записатися',
            ourCalendar: 'Наш Календар',
            checkLevel: 'Перевірити рівень індивідуальної підготовки',
            publicOffer: 'Публічна оферта',
            privacy: 'Політика конфіденційності',
            level: 'Рівень підготовки:',
            webinarDescribe: 'Вебінар розкриває такі пункти:',
          },
          header: {
            about: 'про компанію',
            services: 'послуги',
            events: 'заходи',
            contacts: 'контакти',
            main: 'головна',
            basket: 'Кошик',
            account: 'Аккаунт',
            exit: 'Вийти',
          },
          services: {
            services: 'Послуги',
            training: 'Програми навчання',
            webinars: 'Лекції та вебінари',
            description: 'Опис',
            webinarDescription: 'Вебінар розкриває такі пункти:',
            program: 'Програма',
            webinarsInProgram: 'Вебінари в програмі',
            levels: 'Рівні професійної підготовки',
          },
          individual: {
            order: 'Замовити індивідуальне навчання',
            text1:
              'Ви можете замовити консультацію, діагностичний аудит, проведення вебінару для своєї команди або організацію конференції офлайн або онлайн',
            text2:
              "Заповніть, будь ласка, форму зворотного зв'язку та вкажіть бажану тему вебінару або назву програми, а ми підберемо для Вас оптимальний склад фахівців і зручний формат.",
          },
          form: {
            title: 'Ваше замовлення',
            empty: 'Ваша корзина порожня',
            amount: 'Сума',
            cancel: 'Скасувати',
            send: 'Відправити',
            name: "Ім'я",
            phone: 'Телефон',
            email: 'E-mail',
            them: 'Тема вебінару або програма',
            short: 'Занадто коротко!',
            long: 'Занадто довгий!',
            nameIsRequired: "Ім'я обов'язкове",
            phoneIsNotValid: 'Номер телефону не дійсний',
            phoneIsRequired: "Телефон обов'язковий",
            invalidEmail: 'Неправильний e-mail',
            emailIsRequired: "Email обов'язковий",
            topicIsRequired: "Тема обов'язкова",
          },
          main: {
            title1: 'Знания это',
            title2: 'ключ к успеху',
            subtext:
              'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
            box1: {
              text1: 'Актуальные и компетентные материалы',
              subtext1:
                'Мы обеспечиваем доступ к самым современным знаниям и практическим инструментам',
              text2: ' Экспертные преподаватели и ведущие школы',
              subtext2:
                'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
              text3: 'Интерактивность и практика',
              subtext3:
                'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
            },
            box2: {
              text1: 'ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ',
              text2: 'О нас',
              text3:
                'Наша миссия заключается в том, чтобы помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные решения в критических бизнес-процессах',
              text4: ' партнеров по всему миру',
              text5: ' выпущенных препаратов',
              text6: 'регистрационных процедур в год',
            },
            box3: {
              text1: 'Обучение от Ведущих Экспертов',
              text2:
                'Наша главная цель это обеспечение потребностей рынка лучшими специалистами в своей области. Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить только у практикующих экспертов.',
            },
          },
        },
      },
    },
  });

export default i18n;
