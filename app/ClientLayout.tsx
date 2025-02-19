'use client';

import { Provider } from "react-redux";
import { store } from './store/store';
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Provider store={store}>
                <Header />
                <main>{children}</main>
                <Footer />
            </Provider>
        </div>
        
        </>
    );
}