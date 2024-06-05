import { Outlet } from "react-router-dom";
import Header from "../Header"

const Root = () => {
    return (
        <main className='flex flex-col mb-6 text-center text-white'>
            <section className='w-10/12 max-w-4xl mx-auto'>
                <Header />
                <Outlet />
            </section>
        </main>
    );
};

export default Root;
