import React from 'react'

const appointmentTimeOfDay = startAt => {
    const [h, m] = new Date(startAt).toTimeString().split(':');
    return `${h}:${m}`; 
}

export const Appointment = ({customer}) => (
    <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
    <div id="appointmentsDayView">
        <ol>
            {appointments.map(appointment => (
                <li key={appointment.startAt} >
                    {appointmentTimeOfDay(appointment.startAt)}
                </li>
            ))}
        </ol>
        {appointments.length === 0? (
            <p>There are no appointments scheduled for today.</p>
        ) : (
            <Appointment {...appointments[0]} />  
        )}
    </div>
);