import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export function Login() {
    return (
        <div className={styles.principalContent}>
            <Header />
            <div className={styles.formContent}>
                <form action="">
                    <h2>FAÇA LOGIN</h2>

                    <label htmlFor="emailInput">
                        EMAIL:
                        <input type="email" id="emailInput"/>
                    </label>
                    

                    <label htmlFor="passwordInput">
                        SENHA:
                    <input type="password" id="passwordInput"/>
                    </label>
                    

                    <button type="button">
                        Entrar
                    </button>
                </form>
            </div>
            <footer className={styles.footer}>
                <span>
                    Endereço: comunidade Campos Gerais, s/n | Bairro: Zona Rural<br/>
                    Cidade: Luislândia - MG | CEP: 39336-000 | Email: associacaocamposgerais@gmail.com<br/>
                    CNPJ: 21.357.801/0001-89 | Data de fundação: 13/05/1983
                </span>
            </footer>
        </div>
        )
}