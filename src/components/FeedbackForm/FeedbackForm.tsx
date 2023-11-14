import { useState, useEffect, MouseEvent, FC, useRef } from 'react';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import selectDownArrowIcon from 'src/assets/icons/select-down-arrow.svg';
import selectUpArrowIcon from 'src/assets/icons/select-up-arrow.svg';
import { useClickOutside } from 'src/hooks/useClickOutside';

import s from  './FeedbackForm.module.scss';
import { FeedbackFormProps } from './FeedbackFormProps';
import { Input } from './Input';
import { desc_validation, email_validation, name_validation } from './InputValidations';
import axios from 'axios';


export const FeedbackForm:FC<FeedbackFormProps> = ({ data }) => {

    const methods = useForm();

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);

        axios.post("https://31.184.254.112:8081/feedbacks", data)
            .then (response=>console.log(response))
            .catch(err => console.log(err))

    });

    const dropdownRef = useClickOutside(() => setOpenDropdown(false));
    // Form state control
    const [formData, setFormData] = [data.formData, data.setFormData];
    
    // Message symbols count
    const [count, setCount] = useState(0);
    // Checkbox control
    const [agreed, setAgreed] = useState(false);
    // Select dropdown control
    const [openDropdown, setOpenDropdown] = useState(false);

    useEffect(() => {
        setCount(formData.message.length);
    }, [formData.message]);


    const setFormField = (field: string, value: string) => {

        console.log(field, value)
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSelect = (e: MouseEvent) => {
        const item = e.target;
        if (item) {
            setFormField('messageType', (item as HTMLLIElement).textContent || '');
        }
        setOpenDropdown(false);
    };




    return (

        <FormProvider {...methods}>


            <form  onSubmit={e => e.preventDefault()}
                noValidate
                className={s.feedbackForm}>
                <h2 className={s.feedbackFormHeading}>Связаться с нами</h2>
                <p className={s.feedbackFormDescription}>Если у вас есть вопросы или предложения, пожалуйста, заполните  форму ниже</p>
                <div className={s.feedbackFields}>


                    <div className={s.feedbackFormField}>
                        <Input  {...name_validation} />
                    </div>
                    <div className={s.feedbackFormField}>
                        <Input  {...email_validation} />
                    </div>
                    <div className={`${s.feedbackFormField} ${s.paddingTop}`}>
                        <label>Тип сообщения</label>
                    <select {...methods.register("messageTopic", { required: {
                            value: true,
                            message: 'Обязательно'
                        } } )} className={s.customSelectNew}>
                        <option value="">Выберите...</option>
                        <option value="Вопрос">Вопрос</option>
                        <option value="Предложение">Предложение</option>
                        <option value="Проблема/жалоба">Проблема/жалоба</option>
                        <option value="Отзыв">Отзыв</option>
                    </select>
                    </div>


                    {/*<div className={s.feedbackFormField}>*/}
                    {/*    <label htmlFor='name'>Имя</label>*/}
                    {/*    <input*/}
                    {/*        type='text'*/}
                    {/*        id='name'*/}
                    {/*        name='name'*/}
                    {/*        value={formData.name}*/}
                    {/*        onChange={(e) => setFormField(e.target.name, e.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className={s.feedbackFormField}>*/}
                    {/*    <label htmlFor='email'>E-mail</label>*/}
                    {/*    <input*/}
                    {/*        type='email'*/}
                    {/*        id='email'*/}
                    {/*        name='email'*/}
                    {/*        value={formData.email}*/}
                    {/*        onChange={(e) => setFormField(e.target.name, e.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className={`${s.feedbackFormField} ${s.paddingTop}`}>
                        <label>Тип сообщения</label>
                        <div ref={dropdownRef}>
                            <button type='button' className={s.customSelect} onClick={() => setOpenDropdown(!openDropdown)}>
                                <span>{formData.messageType}</span>
                                <img src={openDropdown ? selectUpArrowIcon : selectDownArrowIcon} alt='down' />
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
                    <div className={s.messageCounter}>{methods.watch('description') ? methods.watch('description').length: '0'}/500</div>

                    {/*<div className={s.feedbackFormField}>*/}
                    {/*    <label htmlFor='message'>Сообщение</label>*/}
                    {/*    <textarea*/}
                    {/*        id='message'*/}
                    {/*        name='message'*/}
                    {/*        maxLength={500}*/}
                    {/*        value={formData.message}*/}
                    {/*        onChange={(e) => setFormField(e.target.name, e.target.value)}*/}
                    {/*    />*/}
                    {/*    <div className={s.messageCounter}>{count}/500</div>*/}
                    {/*</div>*/}
                </div>
                <div className={s.feedbackFormPolytics}>
                    <button type='button' className={`${s.feedbackFormCheckbox}${agreed ? ' ' + s.selected : ''}`} onClick={() => setAgreed(!agreed)} />
                    <input type='checkbox' id="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
                    <span>
                        <label onClick={() => setAgreed(!agreed)}>отправляя сообщение, вы соглашаетесь&nbsp;</label>
                        <span>c <a href='#'>политикой конфиденциальности</a></span>
                    </span>
                </div>
                <button type='submit' className={s.feedbackFormSubmitBtn} disabled={!agreed} onClick={onSubmit}>Отправить</button>
            </form>
        </FormProvider>
    );
};
