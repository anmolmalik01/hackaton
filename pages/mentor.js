import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Mentor from '@/components/Mentor';
import styles from "../styles/open.module.css"

function mentor() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://adi.adityaberry.repl.co/api/read_mentor');
            setData(result.data);
        };
        fetchData();
    }, []);
    console.log(data)

    return (
        <div className='bg-black'>
            <div className={styles.m}>

                <div className='flex flex-row'>
                    <h1 className='text-white text-center pt-10 font-bold'>Mentor</h1>
                    {
                        data.map((a) =>
                            // Wrong! The key should have been specified here:
                            <Mentor name={a.Description} Name={a.Name} Email={a.Email} rating={a.Rating} />
                        )
                    }

                </div>
            </div>

        </div >


    )

}

export default mentor;