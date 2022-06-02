
// import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuizes } from "../uiHelper";
import localQuizes from '../data/quizes';


export default function Quizes(props: any) {
    const [quizes, setQuizes] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await getQuizes();
                setQuizes(resp.data.filter((i: any) => i.status === 'published'));
            } catch (e) {
                setQuizes(localQuizes.filter((i: any) => i.status === 'published'));
            }
        }
        getData();
    }, []);

    return (
        <div
            id="courses"
            className={
                "my-24 px-6 pt-20 flex flex-col items-center flex-wrap justify-center"
            }
        >
            <div className="text-6xl text-center mb-4"> Quizes</div>
            <div className='text-xl mt-2 font-bold'>Live</div>

            <div className="flex flex-wrap flex-col md:flex-row  justify-center p-2 w-full">
                {quizes.map((quiz: any) => {
                    return (
                        <NavLink to={`/quizes/${quiz.id}`} onClick={() => {
                            window.scrollTo(0, 0);
                        }}>
                            <div
                                key={quiz.title}
                                className="flex flex-col items-center justify-center mt-2 ml-0 sm:ml-12 px-4 py-4 mt-lg-0 font-bold box-shadow border border-green-500 rounded-[5px]"
                            >


                                <div className="ml-2 text-2xl">{quiz.title} </div>
                                <div className="ml-2">{quiz.description}</div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}