import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu inverted icon="labeled" vertical>
                <Menu.Item
                    name="bullhorn" as={NavLink} to="/jobPositions"
                >
                    <Icon name="bullhorn" />
                    İş Pozisyonları
                </Menu.Item>

                <Menu.Item
                    name="user" as={NavLink} to="/jobseekerList"
                >
                    <Icon name="user"  />
                    İş Arayanlar
                </Menu.Item>

                <Menu.Item
                    name="user"  as={NavLink} to="/employerList"
                >
                    <Icon name="user"/>
                    Şirketler
                </Menu.Item>
            </Menu>
        </div>
    )
}
