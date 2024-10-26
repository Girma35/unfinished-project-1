'use client';

import React, { useState, useEffect } from 'react';
import InputWithLabel from "./withLabel";
import JobTypeDropdown from "./dropDown";
import SubmitButton from './submit-button';
import { createJob } from '../../../../lib/jobs';
import { useRouter } from 'next/router';


const initialState = {
    title: "",
    salary: "",
    location: "",
    employmentType: "",
};

const jobType = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Intern", label: "Intern" },
    { value: "Contract", label: "Contract" },
];

export default function Jobs() {
    const [value, setValue] = useState("");
    const [state, setState] = useState(initialState);
    const [jobTypeValue, setJobTypeValue] = useState("");
    const [ toastMessage, setToastMessage] = useState("");



    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function onJobTypeChange(value: string) {
        setJobTypeValue(value);
    }

    useEffect(() => {
        setState(prev => ({ ...prev, employmentType: jobTypeValue }));
    }, [jobTypeValue]);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        const router = useRouter();
        event.preventDefault();
        try {
            await createJob(state); 
            setToastMessage("Job created successfully");
            router.push('/examplepages');  
        } catch (error) {
            setToastMessage("Failed to create job");
        }
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-3 py-12 gap-8">
                <InputWithLabel
                    type="text"
                    label="Title"
                    id="title"
                    placeholder="Title..."
                    value={state.title}
                    name="title"
                    onChange={onChange}
                />
                <InputWithLabel
                    type="text"
                    label="Location"
                    id="location"
                    placeholder="Location..."
                    value={state.location}
                    name="location"
                    onChange={onChange}
                />
                {/* JobTypeDropdown now handles selecting job types */}
                <JobTypeDropdown jobType={jobType} onChange={onJobTypeChange} />
                <InputWithLabel
                    type="number"
                    label="Salary"
                    id="salary"
                    placeholder="Salary..."
                    name="salary"
                    value={state.salary}
                    onChange={onChange}
                />
                <SubmitButton label='Create' toastMessage={toastMessage} />
            </form>
        </div>
    );
}
// video 25:000 and npx prisma studio not work 
