import { Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
    return (
        <div>


            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Task Manager
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/addtask">
                        Add Task
                    </Navbar.Link>
                    <Navbar.Link href="/mytask">
                        My Task
                    </Navbar.Link>
                    <Navbar.Link href="/completedtask">
                        Completed Task
                    </Navbar.Link>
                    <Navbar.Link href="/login">
                        Login
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;