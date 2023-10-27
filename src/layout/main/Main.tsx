import React, { PropsWithChildren } from 'react';

import './Main.scss'

const Main = ({ children }: PropsWithChildren) => {
    return <main className="Main">{children}</main>
}

export default Main;