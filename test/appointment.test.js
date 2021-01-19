import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Appointment, AppointmentsDayView} from '../src/appointment.js'

describe('Appointment', () => {
    let customer;
    let container;

    const render = component => ReactDOM.render(component, container)

    beforeEach(() => {
        container = document.createElement('div');
    })

    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };

        render(<Appointment customer={customer} />);
        
        expect(container.textContent).toMatch('Ashley');
    });

    it('renders another customer first name', () => {
        customer = { firstName: 'Jorden' };
        
        render(<Appointment customer={customer} />);
        
        expect(container.textContent).toMatch('Jorden');
    });
}); 

describe('AppoitmentsDayView', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appoitments in the ol element', () => {
        const today = new Date();
        const appointments = [
            { startAt: today.setHours(12, 0) },
            { startAt: today.setHours(13, 0) }
        ];
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    });
});
