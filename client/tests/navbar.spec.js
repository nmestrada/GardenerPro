import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai'
import * as rrd from 'react-router-dom'
const { MemoryRouter } = rrd

import Navbar from '../components/Navbar'

configure({ adapter: new Adapter() });

//possible tests
//navbar goes to right user page
describe('Navbar', () => {
    beforeEach(() => {
        //fill this if necessary
    })
  
    it('renders links to Calendar and My Plants', () => {
        //notes: had to use Memory Router, because I was getting the error "cannot use links outside of a router"
        const navBar = mount(
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        )
        expect(navBar.text()).to.include('Calendar')
        expect(navBar.text()).to.include('My Plants')
    })
  })
