import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Episode } from './Episode'

export function Routes({sentence, showToasterSuccess , showToasterError}) {
    return (
        <div className="w-full">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/practice/episode-1" />
                </Route>
                <Route exact path={['/practice/episode-1']}>
                    <Episode sentence={sentence} showToasterSuccess={showToasterSuccess} showToasterError={showToasterError}/>
                </Route>
            </Switch>
        </div>
    )
}
