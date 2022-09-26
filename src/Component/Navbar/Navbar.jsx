import React from 'react'
import './Navbar.css'
import { Button } from '@mantine/core';
function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Buy Now</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <Button radius="xl">
                        Login
                    </Button>
                </ul>
            </div>
        </>
    )
}

export default Navbar