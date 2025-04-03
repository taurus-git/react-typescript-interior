import React, { useState } from 'react';
import "./subscribe-form.css";
import { UI_TEXTS } from "../../../constants/constants";
import { Icon } from "../Icon/Icon";

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
        <div className="subscribe">
            <form onSubmit={ handleSubmit } className="subscribe__form">
                <div
                    className={ `subscribe__field subscribe__field--email ${ email ? "subscribe__field-input--error" : "" }` }>
                    <Icon id={ "letter" }/>
                    <input
                        type="email"
                        value={ email }
                        className="subscribe__field-input"
                        placeholder={ UI_TEXTS.EMAIL_PLACEHOLDER }
                        onChange={ ( e ) => setEmail( e.target.value ) }/>
                </div>
                <button
                    type="submit"
                    disabled={ isSubmitting }
                    className="cta-primary subscribe__submit">
                    { isSubmitting ? UI_TEXTS.SUBMITTING + "..." : UI_TEXTS.SUBSCRIBE }
                </button>
                { error && <p className="subscribe__message subscribe__message--error">{ error }</p> }
                { isSuccess && !error &&
                    <p className="subscribe__message subscribe__message--success">{ UI_TEXTS.SUBSCRIBED_SUCCESS + "!" }</p> }
            </form>
        </div>

    );
}
