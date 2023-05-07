import './opportunity.css'

export default function opportunity({
    activityImg,
    activityName,
    activityLocation,
    activityTime,
    activityCategory,
    activityDescription
}: {
    activityImg: string,
    activityName: string,
    activityLocation: string,
    activityTime: string,
    activityCategory: string,
    activityDescription: string
}) {
    return (
        <div className="opportunityItem flex p-5">
            {/*image */}
            <img src={activityImg} className='mr-5' />

            {/*content */}
            <div className='opportunityItem__content flex flex-col'>
                {/* activity name*/}
                <p className='text-xl font-bold'>{activityName}</p>
                {/* activity location, time, category */}
                <div className="activityInfo flex mb-5">
                    {/*activity location */}
                    <p>{activityLocation}</p>
                    {/*activity time */}
                    <p className='mx-10'>{activityTime}</p>
                    {/*activity category */}
                    <p>{activityCategory}</p>
                </div>
                {/* activity description */}
                <p>{activityDescription}</p>
            </div>

        </div>
    )
}