import React, { useState } from 'react';
import "./subscribe-form.css";
import { UI_TEXTS } from "../../../constants/constants";

export const SubscribeForm = () => {
    const [ email, setEmail ] = useState( "" );
    const [ error, setError ] = useState( "" );
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const [ isSuccess, setIsSuccess ] = useState( false );

    const validateEmail = ( email: string ) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test( email );
    }

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( !validateEmail( email ) ) {
            setError( UI_TEXTS.INVALID_EMAIL );
            return;
        }

        setIsSubmitting( true );

        setTimeout( () => {
                setIsSubmitting( true );
                setIsSuccess( true );
                setError( "" );
                setEmail( "" );
                setIsSubmitting( false );
            }, 2000
        );
    }

    return (
        <div className="subscribe-container">
            <form onSubmit={ handleSubmit } className="subscribe-form">
                <input type={ "email" }
                       value={ email }
                       className={ `${ email ? "subscribe-form__input--error" : "" } subscribe-form__input` }
                       placeholder={ UI_TEXTS.EMAIL_PLACEHOLDER }
                       onChange={ ( e ) => setEmail( e.target.value ) }/>
                <button
                    type="submit"
                    disabled={ isSubmitting }
                    className="subscribe-form__submit-button">
                    { isSubmitting ? UI_TEXTS.SUBMITTING + "..." : UI_TEXTS.SUBSCRIBE }
                </button>
                { error && <p className={ `subscribe-form__error` }>{ error }</p> }
                { isSuccess && <p className={ `subscribe-form__success` }>{ UI_TEXTS.SUBSCRIBED_SUCCESS + "!" }</p> }
            </form>
        </div>
    );
}
