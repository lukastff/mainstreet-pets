import {User} from "lucide-react";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <a href="/">LOGO</a>
                <input type="search" />
                <div>
                    <button type="button">L</button>
                    <button type="button">Favoritos</button>
                    <button type="button">Carrinho</button>
                    <div>
                        <a href="/about"><User /></a>
                        <div>
                            <a href="/contact">Entrar</a>
                            <a href="/contact">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav></nav>
        </header>
    );
}