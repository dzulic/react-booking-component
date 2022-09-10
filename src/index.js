import React from 'react';
import store from "./lib/lib/store";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";
import {history} from "./lib/lib/utils/history"
import {BookingsCurrentUserComponent, BookRoomForm} from "./lib";

const App = () => (
    <Provider store={store}>
        <HistoryRouter history={history}>
            <Auth0Provider
                domain="bookaroom-fon.eu.auth0.com"
                clientId="pzQzQA9sAuIZz3740i2k9w5CaKe5bHwq"
                redirectUri={window.location.origin + "/callback"}
                audience="https://bookaroom-fon.eu.auth0.com/api/v2/"
                scope="read:current_user update:current_user_metadata update:current_user_metadata create:current_user_metadata">
                <BookRoomForm/>
                {/*<BookingsCurrentUserComponent/>*/}
            </Auth0Provider>
        </HistoryRouter>
    </Provider>
);

render(<App/>, document.getElementById("root"));
