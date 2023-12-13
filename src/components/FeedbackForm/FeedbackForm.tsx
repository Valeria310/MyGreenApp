import { useState, useEffect, MouseEvent, FC } from 'react';

import { CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import selectDownArrowIcon from 'src/assets/icons/select-down-arrow.svg';
import selectUpArrowIcon from 'src/assets/icons/select-up-arrow.svg';
import { useClickOutside } from 'src/hooks/useClickOutside';

import s from './FeedbackForm.module.scss';
import { FeedbackFormProps } from './FeedbackFormProps';
import { Input } from './Input';
import { desc_validation, email_validation, name_validation } from './InputValidations';


type MessageTopicForBackEndType = 'REVIEW' | 'QUESTION' | 'OFFER' | 'PROBLEM' | ''

export const FeedbackForm: FC<FeedbackFormProps> = ({ showResultPopUp }) => {

    const [messageTopic, setMessageTopic] = useState<string>('');
    const [showProgress, setShowProgress] = useState(false);
    const dropdownRef = useClickOutside(() => setOpenDropdown(false));


    // Checkbox control
    const [agreed, setAgreed] = useState(false);

    // Select dropdown control
    const [openDropdown, setOpenDropdown] = useState(false);


    const methods = useForm({ mode: 'onBlur' });

    methods.watch((data) => localStorage.setItem('feedbackFormData', JSON.stringify(data)));

    const onSubmit = methods.handleSubmit((data) => {

        setShowProgress(true);

        let messageTopicForBackEnd: MessageTopicForBackEndType = '';

        if (messageTopic === 'Вопрос') {
            messageTopicForBackEnd = 'QUESTION';
        } else if (messageTopic === 'Предложение') {
            messageTopicForBackEnd = 'OFFER';
        } else if (messageTopic === 'Проблема/жалоба') {
            messageTopicForBackEnd = 'PROBLEM';
        } else if (messageTopic === 'Отзыв') {
            messageTopicForBackEnd = 'REVIEW';
        }


        const dataObgWithMessageTopic = { ...data, messageTopic: messageTopicForBackEnd };

        const objToSend = JSON.stringify(dataObgWithMessageTopic);

        axios.post('https://31.184.254.112:8081/feedbacks', objToSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                methods.reset();
                setShowProgress(false);
                showResultPopUp('success');
            })
            .catch(() => {
                setShowProgress(false);
                showResultPopUp('error');
            });
    });


    useEffect(() => {

        const formDataFromLocalStorage = localStorage.getItem('feedbackFormData');
        if (formDataFromLocalStorage) {
            const formDataCopy = JSON.parse(formDataFromLocalStorage);
            methods.setValue('name', formDataCopy.name);
            methods.setValue('email', formDataCopy.email);
            methods.setValue('messageContent', formDataCopy.messageContent);
        }

        const messageTopicFromLocalStorage = localStorage.getItem('messageTopic');
        if (messageTopicFromLocalStorage) {
            const messageTopicFromLocalStorageCopy = JSON.parse(messageTopicFromLocalStorage).messageTopic;
            setMessageTopic(messageTopicFromLocalStorageCopy);
        }


    }, []);


    const handleSelect = (e: MouseEvent) => {

        const item = e.target;
        const itemValue = (item as HTMLLIElement).textContent;

        if (itemValue) {
            setMessageTopic(itemValue);
            localStorage.messageTopic = JSON.stringify({ messageTopic: itemValue });
        }
        setOpenDropdown(false);
    };

    return (

        <FormProvider {...methods}>

            <form onSubmit={e => e.preventDefault()}
                noValidate
                className={s.feedbackForm}>
                <h2 className={s.feedbackFormHeading}>Связаться с нами</h2>
                <p className={s.feedbackFormDescription}>Если у вас есть вопросы или предложения, пожалуйста, заполните
                    форму ниже</p>
                <div className={s.feedbackFields}>

                    <div className={s.feedbackFormField}>
                        <Input   {...name_validation} />
                    </div>
                    <div className={s.feedbackFormField}>
                        <Input  {...email_validation} />
                    </div>


                    <div className={`${s.feedbackFormField} ${s.paddingTop}`}>
                        <label>Тип сообщения</label>
                        <div ref={dropdownRef}>
                            <button type="button" className={s.customSelect}
                                onClick={() => setOpenDropdown(!openDropdown)}>
                                <span>{messageTopic}</span>
                                <img src={openDropdown ? selectUpArrowIcon : selectDownArrowIcon} alt="down"/>
                            </button>
                            {openDropdown &&
                                <ul className={s.selectDropdown}>
                                    <li className={s.selectItem} onClick={(e) => handleSelect(e)}>Вопрос</li>
                                    <li className={s.selectItem} onClick={(e) => handleSelect(e)}>Предложение</li>
                                    <li className={s.selectItem} onClick={(e) => handleSelect(e)}>Проблема/жалоба</li>
                                    <li className={s.selectItem} onClick={(e) => handleSelect(e)}>Отзыв</li>
                                </ul>
                            }
                        </div>
                    </div>

                    <div className={s.feedbackFormField}>
                        <Input  {...desc_validation} />
                    </div>
                    <div
                        className={s.messageCounter}>{methods.watch('messageContent') ? methods.watch('messageContent').length : '0'}/500
                    </div>

                </div>
                <div className={s.feedbackFormPolytics}>
                    <button type="button" className={`${s.feedbackFormCheckbox}${agreed ? ' ' + s.selected : ''}`}
                        onClick={() => setAgreed(!agreed)}/>
                    <input type="checkbox" id="agree" checked={agreed} onChange={() => setAgreed(!agreed)}/>
                    <span>
                        <label onClick={() => setAgreed(!agreed)}>отправляя сообщение, вы соглашаетесь&nbsp;</label>
                        {/*<span>c <a href="/privacy-policy/">политикой конфиденциальности</a></span> */}
                        <span>c <Link to={'/privacy-policy/'}>политикой конфиденциальности</Link></span>
                    </span>
                </div>

                <button type="submit" className={s.feedbackFormSubmitBtn} disabled={!agreed}
                    onClick={onSubmit}>Отправить
                </button>
                {showProgress && <CircularProgress
                    sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginLeft: '-20px'
                    }}
                />}
            </form>
        </FormProvider>
    );
};