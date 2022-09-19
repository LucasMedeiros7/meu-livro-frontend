import styles from "./novidade.module.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const Novidades = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    const desativado = nome.length === 0 || email.length === 0

    const alert = () => {
        toast.success("Ótima escolha! Iremos enviar nossos conteúdos para você.", {
            position: toast.POSITION.TOP_CENTER
        });
        setNome('')
        setEmail('')
    };

    return (
        <section className={styles.container}>
            <h3>Fique por dentro de todas as novidades e promoções:</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.campo} onChange={(e) => setNome(e.target.value)} type="text" value={nome} placeholder="Digite seu nome" />
                <input className={styles.campo} onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Digite seu melhor email" />
                <button onClick={alert} disabled={desativado} className={styles.enviar} type="submit">Enviar</button>
            </form>
            <ToastContainer />
        </section>
    )
}