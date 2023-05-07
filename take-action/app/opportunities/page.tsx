'use client'
import { useEffect, useState } from "react"
import OpportunityItem from "../components/opportunityItem"
import './opportunities.css'


export default function Opportunities() {

    useEffect(function () {
        //fetch('')
        //    .then(res => res.json())
        //    .then(res => setActivities(res))
    }, [])

    const [activities, setActivities] = useState([{
        img: 'a',
        name: 'Saving local animal',
        location: 'Seattle, WA',
        time: 'May 6',
        category: 'Animal',
        description: 'we offer you an animal care volunteer experience with a difference – you’ll join cutting-edge conservation research teams alongside like-minded'

    }])

    return (
        <div className="opportunities">
            <div className="opportunities__addButton my-5 p-5">add activities</div>
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