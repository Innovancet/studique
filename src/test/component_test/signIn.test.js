import React from 'react';
import SignIn from '../../components/signIn'
import {render, fireEvent, cleanup, getByPlaceholderText} from '@testing-library/react';

afterEach(cleanup)

it('Checking for Email input typing', () => {
    const { search } = render(<SignIn/>);

    const container = document.body;
    expect(getByPlaceholderText(container, 'Email').textContent).toBe("")   
    const setupEmail = () => {
        const input = document.getElementById("inputEmailIn");
        return {
          input,
          ...search,
        }
      }
    const { input } = setupEmail()        
    fireEvent.change(input, { target: { value: 'dane@mail.gvsu.edu' } })
    expect(input.value).toBe('dane@mail.gvsu.edu')
 });

 it('Checking for Password input typing', () => {
    const { search } = render(<SignIn/>);

    const container = document.body;
    expect(getByPlaceholderText(container, 'Password').textContent).toBe("")   
    const setupPassword = () => {
        const input = document.getElementById("inputPasswordIn");
        return {
          input,
          ...search,
        }
    }
    const { input } = setupPassword()    
    fireEvent.change(input, { target: { value: 'f@kePa$$w0rd' } })
    expect(input.value).toBe('f@kePa$$w0rd')
 });
