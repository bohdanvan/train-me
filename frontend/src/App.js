import React from 'react'
import ProfileRegistration from './profile-registration/ProfileRegistration'
import '@fontsource/roboto'
import MainPage from 'main/MainPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SingInPage from 'main/sign-in/SingInPage'
import { withAuth } from 'context/Auth'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/sign-in" component={SingInPage} />
                <Route path="/profile" component={ProfileRegistration} />
                <Route path="/" component={MainPage} />
                {/* TODO: add error route */}
            </Switch>
        </Router>
    )
}

export default withAuth(App)
