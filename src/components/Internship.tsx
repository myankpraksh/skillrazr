import React from 'react';
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Internship(props: any) {

    const [comingSoon, showComingSoon] = React.useState(false);

    return (
        <div
            id="internship"
            className={
                " px-6 pt-20 flex flex-col items-center flex-wrap justify-between"
            }
        >
            <div className="text-6xl text-center mb-4">Paid Internship</div>
            <div className="flex flex-wrap flex-col  items-center justify-center p-8 w-full">
                <ul className='text-small py-4'>
                    <div className='text-2xl font-bold mb-4'>Get a chance to show case your skills and much more!</div>
                    <li>
                        <CheckCircleOutlineIcon htmlColor='green' /> Gain industry experience
                    </li>
                    <li>
                        <CheckCircleOutlineIcon htmlColor='green' /> Develop new skills
                    </li>
                    <li>
                        <CheckCircleOutlineIcon htmlColor='green' /> Get decent stipend
                    </li>
                    <li>
                        <CheckCircleOutlineIcon htmlColor='green' /> Open doors to new opportunities
                    </li>
                </ul>
                <div className="navbar-nav-scroll flex flex-row  px-2 py-4">
                    <Button variant='outlined' className='!capitalize w-[124px]' onMouseEnter={() => {
                        showComingSoon(true)
                    }}
                        onMouseLeave={() => {
                            showComingSoon(false)
                        }}
                    >{!comingSoon ? "Apply Now" : "Coming Soon"}</Button>
                </div>
            </div>
        </div>
    );
}