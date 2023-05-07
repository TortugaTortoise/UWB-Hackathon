'use client'
import { useEffect, useState } from "react"
import OpportunityItem from "../components/opportunityItem"
import './opportunities.css'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import fireBaseConfig from '../firebase'




export default function Opportunities() {



    const addActivities = () => {
        const data = {
            img: img,
            name: name,
            location: location,
            time: time,
            category: category,
            description: description
        }
        let tempData = [...activities];
        tempData.push(data)
        setActivities(tempData)
    }
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleOnChangeName = (e: any) => {
        setName(e.target.value)
    }
    const handleOnChangeImg = (e: any) => {
        setImg(e.target.value)
    }
    const handleOnChangeLocation = (e: any) => {
        setLocation(e.target.value)
    }
    const handleOnChangeTime = (e: any) => {
        setTime(e.target.value)
    }
    const handleOnChangeCategory = (e: any) => {
        setCategory(e.target.value)
    }
    const handleOnChangeDescription = (e: any) => {
        setDescription(e.target.value)
    }

    const [activities, setActivities] = useState([{
        img: 'a',
        name: 'Saving local animal 1',
        location: 'Seattle, WA',
        time: 'May 6',
        category: 'Animal',
        description: 'we offer you an animal care volunteer experience with a difference – you’ll join cutting-edge conservation research teams alongside like-minded'

    }])

    return (
        <div className="opportunities">
            <div>
                <input type="text" placeholder="img" value={img} onChange={handleOnChangeImg} />
                <input type="text" placeholder="name" value={name} onChange={handleOnChangeName} />
                <input type="text" placeholder="location" value={location} onChange={handleOnChangeLocation} />
                <input type="text" placeholder="time" value={time} onChange={handleOnChangeTime} />
                <input type="text" placeholder="category" value={category} onChange={handleOnChangeCategory} />
                <input type="text" placeholder="description" value={description} onChange={handleOnChangeDescription} />

            </div>
            <div className="opportunities__addButton my-5 p-5" onClick={addActivities}>add activities</div>
            <div className="opportunities__activities">
                {activities.map(activity => (
                    <OpportunityItem
                        key={activity.name}
                        activityImg={activity.img}
                        activityName={activity.name}
                        activityLocation={activity.location}
                        activityTime={activity.time}
                        activityCategory={activity.category}
                        activityDescription={activity.description}
                    />
                ))}

            </div>


        </div>
    )
}