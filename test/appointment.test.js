import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Appointment} from '../src/appointment.js'

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