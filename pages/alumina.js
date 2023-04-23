import Alumina from '@/components/Alumina';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import styles from "../styles/open.module.css"


function alumina() {

    const axios = require('axios');

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://adi.adityaberry.repl.co/api/read_alumni');
            setData(result.data);
        };
        fetchData();
    }, []);
    console.log(data)


    return (
        <div className='bg-black'>
            <Header />
            <div className={styles.m}>

                <div className='flex flex-row'>
                    <h1 className='text-white text-center pt-10 font-bold'>Alumni</h1>

                    {
                        data.map((a) =>
                            <Alumina Email={a.email} Name={a.Name} Collage_name={a.Collage_name} Graduation_year={a.Graduation_year} Description={a.description} />
                        )
                    }
                </div>

            </div>
            <Footer />

        </div >

    );
}

export default alumina;