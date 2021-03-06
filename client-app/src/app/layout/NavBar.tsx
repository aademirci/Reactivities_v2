import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface Props {
    openForm: () => void
}

const NavBar: React.FC<Props> = ({ openForm }) => {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button positive content="Create Activity" onClick={openForm} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
