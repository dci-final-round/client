import React from 'react'
import {
    RouteComponentProps,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import AuthRoute from './AuthRouter'
import NavbarComponent from './components/Navbar'
import Routes from './routes'
import { proxy, useSnapshot } from 'valtio'
import content from './Assets/Content/content.json'

export const AppRouter = () => {
    const state = proxy({ content: content })
    const activeState = useSnapshot(state)
    console.log(activeState)
    return (
        <Router>
            <NavbarComponent name={activeState.content.name} />
            <Switch>
                {Routes.map((route, index) => (
                    <AuthRoute
                        key={index}
                        path={route.path}
                        isPrivate={route.isPrivate}
                        exact
                        Component={
                            route.component as unknown as React.FC<
                                RouteComponentProps<{}>
                            >
                        }
                    />
                ))}
            </Switch>
        </Router>
    )
}
