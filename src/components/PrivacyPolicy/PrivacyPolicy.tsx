import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import classes from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
    return (
        <Box className={classes.privacyPolicy}>
            <Box className={classes.privacyPolicy__container}>
                <Box className={classes.privacyPolicy__inner}>
                    <h1 className={classes.privacyPolicy__title}>Политика конфиденциальности</h1>
                    <p className={classes.privacyPolicy__text}>
                        Настоящая Политика конфиденциальности персональных данных (далее — Политика
                        конфиденциальности) действует в отношении всей информации, которую
                        сайт&nbsp;
                        <b>www.ecohub.by</b>, может получить о Пользователе во время использования
                        сайта.
                    </p>
                </Box>
                <Box>
                    {/* 1. Определение терминов */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>1. Определение терминов</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        1.1. В настоящей Политике конфиденциальности используются
                                        следующие термины:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>
                                                1.1.1 «Сайт» – сайт <b>www.ecohub.by</b>.
                                            </li>
                                            <li>
                                                1.1.2. «Администратор» – уполномоченный сотрудник по
                                                управлению сайтом, действующий от имени Общества с
                                                ограниченной ответственностью «ЭкспириенсЛаб»,
                                                который организует и (или) осуществляет обработку
                                                персональных данных, а также определяет цели
                                                обработки персональных данных, состав персональных
                                                данных, подлежащих обработке, действия (операции),
                                                совершаемые с персональными данными.
                                            </li>
                                            <li>
                                                1.1.3. «Персональные данные» — любая информация,
                                                относящаяся к прямо или косвенно определенному или
                                                определяемому физическому лицу (субъекту
                                                персональных данных).
                                            </li>
                                            <li>
                                                1.1.4. «Обработка персональных данных» - любое
                                                действие (операция) или совокупность действий
                                                (операций), совершаемых с использованием средств
                                                автоматизации или без использования таких средств с
                                                персональными данными, включая сбор, запись,
                                                систематизацию, накопление, хранение, уточнение
                                                (обновление, изменение), извлечение, использование,
                                                передачу (распространение, предоставление, доступ),
                                                обезличивание, блокирование, удаление, уничтожение
                                                персональных данных.
                                            </li>
                                            <li>
                                                1.1.5. «Конфиденциальность персональных данных» -
                                                обязательное для соблюдения Администратором Сайта
                                                или иным получившим доступ к персональным данным
                                                лицом требование не допускать их распространения без
                                                согласия субъекта персональных данных или наличия
                                                иного законного основания.
                                            </li>
                                            <li>
                                                1.1.6. «Пользователь Сайта (далее Пользователь)» –
                                                лицо, имеющее доступ к Сайту, посредством сети
                                                Интернет и использующее Сайт.
                                            </li>
                                            <li>
                                                1.1.7. «Cookies» — небольшой фрагмент данных,
                                                отправленный веб-сервером и хранимый на компьютере
                                                пользователя, который веб-клиент или веб-браузер
                                                каждый раз пересылает веб-серверу в HTTP-запросе при
                                                попытке открыть страницу соответствующего сайта.
                                            </li>
                                            <li>
                                                1.1.8. «IP-адрес» — уникальный сетевой адрес узла в
                                                компьютерной сети, построенной по протоколу IP.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 2. Общие положения */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>2. Общие положения</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        2.1. Использование Пользователем Сайта означает согласие с
                                        настоящей Политикой конфиденциальности и условиями обработки
                                        персональных данных Пользователя.
                                    </li>
                                    <li>
                                        2.2. В случае несогласия с условиями Политики
                                        конфиденциальности Пользователь должен прекратить
                                        использование Сайта.
                                    </li>
                                    <li>
                                        2.3. Настоящая Политика конфиденциальности применяется
                                        только к Сайту. Сайт не контролирует и не несет
                                        ответственность за сайты третьих лиц, на которые
                                        Пользователь может перейти по ссылкам, доступным на Сайте.
                                    </li>
                                    <li>
                                        2.4. Администрация Сайта не проверяет достоверность
                                        персональных данных, предоставляемых Пользователем Сайта.
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 3. Предмет Политики конфиденциальности */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>
                                3. Предмет Политики конфиденциальности
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        3.1. Настоящая Политика конфиденциальности устанавливает
                                        обязательства Администрации Сайта по неразглашению и
                                        обеспечению режима защиты конфиденциальности персональных
                                        данных, которые Пользователь предоставляет по запросу
                                        Администрации Сайта при регистрации на Сайте или при
                                        совершении иных действий посредством Сайта.
                                    </li>
                                    <li>
                                        3.2. Персональные данные, разрешённые к обработке в рамках
                                        настоящей Политики конфиденциальности, предоставляются
                                        Пользователем путём заполнения регистрационной формы или
                                        совершения иных действий на Сайте, и могут включать в себя
                                        следующую информацию:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>3.2.1 фамилию, имя Пользователя;</li>
                                            <li>3.2.2. контактный телефон Пользователя;</li>
                                            <li>3.2.3. адрес электронной почты (e-mail).</li>
                                        </ul>
                                    </li>
                                    <li>
                                        3.3. Сайт защищает данные, которые автоматически передаются
                                        при посещении страниц, на которых установлен статистический
                                        скрипт системы («пиксель»):
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>– IP адрес;</li>
                                            <li>– информация из cookies;</li>
                                            <li>
                                                – информация о браузере (или иной программе, которая
                                                осуществляет доступ к показу рекламы);
                                            </li>
                                            <li>– время доступа;</li>
                                            <li>
                                                – адрес страницы, на которой расположен рекламный
                                                блок;
                                            </li>
                                            <li>– реферер (адрес предыдущей страницы).</li>
                                            <li>
                                                3.3.1 Отключение cookies может повлечь невозможность
                                                доступа к частям Сайта, требующим авторизации.
                                            </li>
                                            <li>
                                                3.3.2. Сайт осуществляет сбор статистики об
                                                IP-адресах своих посетителей. Данная информация
                                                используется с целью выявления и решения технических
                                                проблем.
                                            </li>
                                            <li>
                                                3.3.3. Любая иная персональная информация
                                                неоговоренная выше подлежит надежному хранению и
                                                нераспространению, за исключением случаев,
                                                предусмотренных в п.п. 5.2. настоящей Политики
                                                конфиденциальности.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 4. Цели сбора персональной информации пользователя */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>
                                4. Цели сбора персональной информации пользователя
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        4.1. Персональные данные Пользователя Администратор Сайта
                                        может использовать в целях:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>
                                                4.1.1 Идентификации Пользователя,
                                                зарегистрированного на Сайте.
                                            </li>
                                            <li>
                                                4.1.2. Предоставления Пользователю доступа к
                                                персонализированным ресурсам Сайта.
                                            </li>
                                            <li>
                                                4.1.3. Установления с Пользователем обратной связи,
                                                включая направление уведомлений, запросов,
                                                касающихся использования Сайта, оказания услуг,
                                                обработка запросов и заявок от Пользователя.
                                            </li>
                                            <li>
                                                4.1.4. Подтверждения достоверности и полноты
                                                персональных данных, предоставленных Пользователем.
                                            </li>
                                            <li>
                                                4.1.5. Создания учетной записи, если Пользователь
                                                дал согласие на создание учетной записи.
                                            </li>
                                            <li>
                                                4.1.6. Предоставления Пользователю эффективной
                                                клиентской и технической поддержки при возникновении
                                                проблем, связанных с использованием Сайта.
                                            </li>
                                            <li>
                                                4.1.7. Предоставления Пользователю с его согласия,
                                                новостной рассылки и иных сведений от имени Сайта.
                                            </li>
                                            <li>
                                                4.1.8. Осуществления рекламной деятельности с
                                                согласия Пользователя.
                                            </li>
                                            <li>
                                                4.1.9. Предоставления доступа Пользователю на сайты
                                                или сервисы партнеров Сайта с целью получения
                                                продуктов, обновлений и услуг.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 5. Способы и сроки обработки персональной информации */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>
                                5. Способы и сроки обработки персональной информации
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        5.1. Обработка персональных данных Пользователя
                                        осуществляется без ограничения срока, любым законным
                                        способом, в том числе в информационных системах персональных
                                        данных с использованием средств автоматизации или без
                                        использования таких средств.
                                    </li>
                                    <li>
                                        5.2. Персональные данные Пользователя могут быть переданы
                                        уполномоченным органам государственной власти Республики
                                        Беларусь только по основаниям и в порядке, установленным
                                        законодательством Республики Беларусь.
                                    </li>
                                    <li>
                                        5.3. При утрате или разглашении персональных данных
                                        Администратор сайта информирует Пользователя об утрате или
                                        разглашении персональных данных.
                                    </li>
                                    <li>
                                        5.4. Администратор сайта принимает необходимые
                                        организационные и технические меры для защиты персональной
                                        информации Пользователя от неправомерного или случайного
                                        доступа, уничтожения, изменения, блокирования, копирования,
                                        распространения, а также от иных неправомерных действий
                                        третьих лиц.
                                    </li>
                                    <li>
                                        5.5. Администратор сайта совместно с Пользователем принимает
                                        все необходимые меры по предотвращению убытков или иных
                                        отрицательных последствий, вызванных утратой или
                                        разглашением персональных данных Пользователя.
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 6. Обязательства сторон */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>6. Обязательства сторон</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        6.1. Пользователь обязан:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>
                                                6.1.1 Предоставить информацию о персональных данных,
                                                необходимую для пользования Сайтом.
                                            </li>
                                            <li>
                                                6.1.2. Обновить, дополнить предоставленную
                                                информацию о персональных данных в случае изменения
                                                данной информации.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        6.2. Администратор сайта обязан:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>
                                                6.2.1 Использовать полученную информацию
                                                исключительно для целей, указанных в п. 4 настоящей
                                                Политики конфиденциальности.
                                            </li>
                                            <li>
                                                6.2.2. Обеспечить хранение конфиденциальной
                                                информации в тайне, не разглашать без
                                                предварительного письменного разрешения
                                                Пользователя, а также не осуществлять продажу,
                                                обмен, опубликование, либо разглашение иными
                                                возможными способами переданных персональных данных
                                                Пользователя, за исключением п.п. 5.2. настоящей
                                                Политики Конфиденциальности.
                                            </li>
                                            <li>
                                                6.2.3. Принимать меры предосторожности для защиты
                                                конфиденциальности персональных данных Пользователя
                                                согласно порядку, обычно используемого для защиты
                                                такого рода информации в существующем деловом
                                                обороте.
                                            </li>
                                            <li>
                                                6.2.4. Осуществить блокирование персональных данных,
                                                относящихся к соответствующему Пользователю, с
                                                момента обращения или запроса Пользователя или его
                                                законного представителя либо уполномоченного органа
                                                по защите прав субъектов персональных данных на
                                                период проверки, в случае выявления недостоверных
                                                персональных данных или неправомерных действий.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 7. Ответственность сторон */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>7. Ответственность сторон</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        7.1. Администрация Сайта, не исполнившая свои обязательства,
                                        несёт ответственность за убытки, понесённые Пользователем в
                                        связи с неправомерным использованием персональных данных, в
                                        соответствии с законодательством Республики Беларусь, за
                                        исключением случаев, предусмотренных п.п. 5.2. и 7.2.
                                        настоящей Политики Конфиденциальности.
                                    </li>
                                    <li>
                                        7.2. В случае утраты или разглашения Конфиденциальной
                                        информации Администрация Сайта не несёт ответственность,
                                        если данная конфиденциальная информация:
                                        <ul className={classes.privacyPolicy__innerList}>
                                            <li>
                                                7.2.1 Стала публичным достоянием до её утраты или
                                                разглашения.
                                            </li>
                                            <li>
                                                7.2.2. Была получена от третьей стороны до момента
                                                её получения Администратором Сайта.
                                            </li>
                                            <li>7.2.3. Была разглашена с согласия Пользователя.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 8. Разрешение споров */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>8. Разрешение споров</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        8.1. До обращения в суд с иском по спорам, возникающим из
                                        отношений между Пользователем Сайта и Администрацией Сайта,
                                        обязательным является предъявление претензии (письменного
                                        предложения о добровольном урегулировании спора).
                                    </li>
                                    <li>
                                        8.2. Получатель претензии в течение 30 календарных дней со
                                        дня получения претензии, письменно уведомляет заявителя
                                        претензии о результатах рассмотрения претензии.
                                    </li>
                                    <li>
                                        8.3. При недостижении соглашения спор будет передан на
                                        рассмотрение в судебный орган в соответствии с действующим
                                        законодательством Республики Беларусь.
                                    </li>
                                    <li>
                                        8.4. К настоящей Политике конфиденциальности и отношениям
                                        между Пользователем и Администрацией Сайта применяется
                                        действующее законодательство Республики Беларусь.
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    {/* 9. Дополнительные условия */}
                    <Accordion className={classes.privacyPolicy__accordion}>
                        <AccordionSummary
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ p: 0, m: 0 }}>9. Дополнительные условия</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, m: 0 }}
                            className={classes.privacyPolicy__accordionDetails}
                        >
                            <Box
                                sx={{ p: 0 }}
                                className={classes.privacyPolicy__accordionDetails_textBox}
                            >
                                <ul>
                                    <li>
                                        9.1. Администрация Сайта вправе вносить изменения в
                                        настоящую Политику конфиденциальности без согласия
                                        Пользователя.
                                    </li>
                                    <li>
                                        9.2. Новая Политика конфиденциальности вступает в силу с
                                        момента ее размещения на Сайте, если иное не предусмотрено
                                        новой редакцией Политики конфиденциальности.
                                    </li>
                                    <li>
                                        9.3. Все предложения или вопросы по настоящей Политике
                                        конфиденциальности следует направлять на электронный адрес
                                        Администрации Сайта: info@ecohub.by.
                                    </li>
                                    <li>
                                        9.4. Действующая Политика конфиденциальности размещена на
                                        странице по адресу:
                                        <br />
                                        www.ecohub.by/privacy-policy
                                    </li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};

export default PrivacyPolicy;
